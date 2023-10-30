import express from "express";
const router = express.Router();
import {
  createUser,
  deleteUserByID,
  findUserByID,
  getUsers,
  updateUserByID,
} from "../controller/user.controller.js";

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", findUserByID);

router.delete("/:id", deleteUserByID);

router.patch("/:id", updateUserByID);

export default router;
