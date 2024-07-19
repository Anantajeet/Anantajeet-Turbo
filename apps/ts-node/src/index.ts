import express from "express";
import consola from "consola";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  consola.success(`⚙️ Server is running on port ${port}`);
});
