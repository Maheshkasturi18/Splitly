const { User } = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { setUser } = require("../service/auth")

const Register = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) return res.status(400);

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        name, email, password: hashPassword
    })

    await newUser.save();
    // console.log("newuser ", newUser)

    // return res.redirect('/login')
    return res.status(201).json({ message: "User created successfully. Please login." });
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        console.log("user", user)

        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400, 'Incorrect password');

        const token = setUser(user)
        // console.log("token", token)

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        });

        return res.status(200).json({ message: "User Logged in successfully." });;

    } catch {
        res.status(400).json({ error: "Can't login!" });
    }
}

const GoogleLogin = async (req, res) => {
    const { email, name } = req.body;

    if (!email || !name) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    let user = await User.findOne({ email });

    if (!user) {

        user = new User({
            email,
            name,
            password: "",
        });

        await user.save();
    }

    const token = setUser(user);

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    return res.status(200).json({ message: "Google login successful" });
};

const Logout = (req, res) => {
    res.clearCookie("token", { path: '/' });
    console.log("Logout successful")
    return res.status(200).json({ message: "Logout successful" });
};


module.exports = {
    Register,
    Login,
    GoogleLogin,
    Logout
}