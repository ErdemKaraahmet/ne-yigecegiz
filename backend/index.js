import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dbConnect } from "./dbConnect.js";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/routes/api", apiRoutes);

app.listen(PORT, () => {
  dbConnect();
  console.log("Server is running on port", PORT);
});