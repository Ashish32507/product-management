import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      status: false,
      message: "All fields are required",
    });
  }

  try {
    const exists = await User.findOne({ email });

    if (exists)
      return res.status(400).json({
        status: false,
        message: "Email already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      User: user,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Registration failed",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Email and password are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        status: false,
        message: "Invalid email or password",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        status: false,
        message: "Invalid email or password",
      });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      status: true,
      message: "User Login",
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Login failed",
    });
  }
};
