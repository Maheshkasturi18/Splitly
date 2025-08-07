const jwt = require("jsonwebtoken")
const { User } = require("../models/authModel")

function setUser(user) {
    return jwt.sign(
        {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
        },
        process.env.JWT_SECRET
    );
}

function getUser(token) {
    if (!token) return null
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch {
        return null
    }
}

module.exports = {
    setUser,
    getUser,
};