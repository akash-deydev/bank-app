import { Users } from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    if (!users) {
      return res.status(200).send({
        status: true,
        message: "No users yet...",
      });
    }
    res.status(200).send({
      status: true,
      message: "Users Data",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      status: false,
      message: "Getting error while fetching users",
    });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const { name, email, balance, mobile } = req.body;
    // validation
    if (!name && !email && !balance && !mobile) {
      return res.status(400).send({
        status: false,
        message: "Please fill all the required fields",
      });
    }
    // check user is already registered
    const user = await Users.findOne({ email: email });
    if (user) {
      return res.status(200).send({
        status: true,
        message: "User already exist",
      });
    }

    const newUser = await Users.create({ name, email, balance, mobile });
    res.status(201).send({
      status: true,
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error while creating new user",
      error,
    });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.find({ _id: id });
    if (!user) {
      return res.status(404).send({
        status: false,
        message: "User not found...",
      });
    }

    res.status(200).send({
      status: true,
      message: "User Found",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "Error while getting user detail",
    });
  }
};
