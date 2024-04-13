const User = require("../model/userModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Required username and password." });
    }

    const hashPass = crypto.createHash("md5").update(password).digest("hex");
    const findUser = await User.findOne({
      username: username,
      password: hashPass,
    });

    if (!!!findUser) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { userId: findUser._id, username: findUser.username },
      process.env.SECRET, 
      { expiresIn: "1d" }
    );
    return res.status(200).json({ message: "login successful", token: token });
  } catch (err) {
    console.log('err :: ',err)
    return res.status(400).json({ error: err });
  }
};

module.exports = { login };
