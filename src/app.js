import "dotenv/config";
import express from "express";
import { logger } from "./middleware/logger.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Route-ууд 3-р үе шатанд энд нэмэгдэнэ

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server: http://localhost:${PORT}`);
});