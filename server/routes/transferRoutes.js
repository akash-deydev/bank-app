import express from "express";
import {
  handleFundTransfer,
  getAllTransactions,
} from "../controllers/transferController.js";

const router = express.Router();

router.get("/all-transactions", getAllTransactions);

router.post("/fund-transfer", handleFundTransfer);

export default router;
