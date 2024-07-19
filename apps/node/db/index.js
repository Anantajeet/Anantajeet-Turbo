import mongoose from "mongoose"
import { consola } from "consola"

const connectDB = async () => {

    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)

        consola.success(`Connected with DB ${connect.connect.host}`);

    } catch (e) {
        consola.error("error connecting server:", e);
    }
}

export default connectDB;