import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
import paymentRoutes from "./route/payment/payment.js";
import dotenv from "dotenv";
import { handleWebhook } from "./controller/payment/payment.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const TARGET_URL = process.env.TARGET_URL;
const API_KEY = process.env.API_KEY;

// Enable CORS
app.use(cors());

app.post(
  "/api/payment/webhook",
  express.raw({ type: "application/json" }),
  handleWebhook
);

app.use("/api/payment", express.json(), paymentRoutes);

// Proxy Middleware
app.use(
  "/api",
  createProxyMiddleware({
    logger: console,
    target: TARGET_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      const url = path.replace(/^\/api/, "");

      const query = {
        ...(req.query || {}),
        api_key: API_KEY,
      };

      const queryString = new URLSearchParams(query).toString();
      return queryString ? `${url}?${queryString}` : url;
    },
  })
);

// Start server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
