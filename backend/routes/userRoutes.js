import express from "express";
import {
  authUser,
  deleteUser,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
  getUserById,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, admin, getUsers);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/profile").put(protect, updateUserProfile);
router.route("/:id").delete(protect, admin, deleteUser);
router.route("/:id").put(protect, admin, updateUser);
router.route("/:id").get(protect, admin, getUserById);

export default router;
