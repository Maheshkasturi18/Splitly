const { User } = require("../models/authModel");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");

const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const error = new Error("All fields are required");
      error.status = 400;
      error.message = "Please provide name, email, and password.";
      return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error("User already exists");
      error.status = 400;
      error.message = "A user with this email already exists.";
      return next(error);
    }

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    // console.log("newuser ", newUser)

    // return res.redirect('/login')
    return res
      .status(201)
      .json({ message: "User created successfully. Please login." });
  } catch (error) {
    error.status = 400;
    error.message = "User already exists!" || "Error creating user";
    error.extraDetails = "Something went wrong while registering the user.";

    next(error);
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log("user", user);

    if (!user) {
      const error = new Error("User not found");
      error.status = 400;
      error.message = "No user found with this email.";
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Incorrect password");
      error.status = 400;
      error.message = "The password you entered is incorrect.";
      return next(error);
    }

    const token = setUser(user);
    // console.log("token", token)

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    return res.status(200).json({ message: "User Logged in successfully." });
  } catch (error) {
    error.status = 400;
    error.message = "User already exists!";
    error.extraDetails = "Something went wrong while login the user.";

    next(error);
  }
};

const GoogleLogin = async (req, res, next) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      const error = new Error("Missing required fields");
      error.status = 400;
      error.message = "Please provide email and name.";
      return next(error);
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
  } catch (error) {
    error.status = 400;
    error.message = "Google login failed";
    next(error);
  }
};

const Logout = (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    console.log("Logout successful");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    error.status = 500;
    error.message = "Error during logout";
    error.extraDetails = "Something went wrong while logging out.";
    next(error);
  }
};

module.exports = {
  Register,
  Login,
  GoogleLogin,
  Logout,
};
