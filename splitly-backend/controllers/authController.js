const { User } = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Register = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) return res.status(400);

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        name, email, password: hashPassword
    })

    // const newUser = jwt.sign({
    //     name, email, hashPassword
    
    // })

    await newUser.save();

    // return res.redirect('/login')
    return res.status(200)
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400, 'Incorrect password');

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_SECRET_EXPIRY }
        )

        return res.status(200).json({ token });

    } catch {
        res.status(400).json({ error: "Can't login!" });
    }
}

module.exports = {
    Register,
    Login
}