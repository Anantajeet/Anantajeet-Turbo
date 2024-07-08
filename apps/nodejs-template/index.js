import express from "express";
import 'dotenv/config'

import connectDB from "./db/index.js";
import consola from "consola";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

connectDB().then(() => {
    app.listen(port, () => {
        consola.success(`⚙️  Server is running at port: ${port}`);
    })
}).catch((e) => {
    consola.error("Error connecting Server!!", e)
    process.exit(1)
})