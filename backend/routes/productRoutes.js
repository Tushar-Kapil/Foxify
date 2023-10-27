import express from "express";
import {
  getProducts,
  getProductById,
  createProductReview,
  getTopProducts,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, admin, createProduct);
router.get("/top", getTopProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, admin, updateProduct);
router.post("/:id/reviews", protect, createProductReview);

export default router;
