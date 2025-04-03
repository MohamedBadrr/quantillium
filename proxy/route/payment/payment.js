import express from "express";
import {
  createPaymentLink,
  handleWebhook,
} from "../../controller/payment/payment.js";

const router = express.Router();

router.post("/create-payment-link", createPaymentLink);

export default router;
