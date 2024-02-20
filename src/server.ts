import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB: string = process.env.DATABASE?.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD as string
) as string;
mongoose.connect(DB).then(() => console.log("DB connected!"));

app.listen(8010, () => {
	console.log("Port is running on port:", 8010);
});
