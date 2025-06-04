import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Auth service is up");
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT || 3001}`);
});
