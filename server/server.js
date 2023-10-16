import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import transferRoutes from "./routes/transferRoutes.js";
import connectToMongoDB from "./config/dbConnect.js";

dotenv.config();

const port = process.env.PORT || 9000;

const app = express();

connectToMongoDB();

app.use(cors());
app.use(express.json());
app.use("/api/v1/bank", userRoutes);
app.use("/api/v1/bank", transferRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
