import express from "express";
import cors from "cors";
import router from "./routes/auth.routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", router);
app.use("/api/v1/auth", router);

app.listen(4000);
