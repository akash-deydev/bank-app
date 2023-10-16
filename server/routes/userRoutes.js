import express from "express";
import {
  createNewUser,
  getAllUsers,
  getUserDetails,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.post("/create-user", createNewUser);

router.get("/user/:id", getUserDetails);

export default router;
