// middleware/auth.js

const { getUser } = require("../service/auth");

async function restrictToLoginUser(req, res, next) {
    // Get the token from the cookie instead of the header
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: Please login" });
    }

    const userPayload = getUser(token);

    if (!userPayload) {
        // This could happen if the token is invalid or expired
        return res.status(401).json({ error: "Unauthorized: Invalid session" });
    }

    req.user = userPayload;
    next();
}

module.exports = { restrictToLoginUser };