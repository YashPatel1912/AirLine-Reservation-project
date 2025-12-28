import User from "../model/user-model.js";
import bcrypt from "bcryptjs";

/*//--------------------------------------------//
        registration page
//--------------------------------------------//*/

export const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send({ message: "Email Already Exists" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).send({
      msg: "registration successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).send(error);
    next(error);
  }
};

/*//--------------------------------------------//
        Login page
//--------------------------------------------//*/

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).send({
        msg: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).send({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    // res.status(500).send("Internal server error");
    next(error);
  }
};

/*//--------------------------------------------//
        to send data - user page
//--------------------------------------------//*/

export const user = async (req, res) => {
  try {
    const userData = req.user;

    res.status(200).json({ msg: userData });
  } catch (error) {
    next(error);
  }
};
