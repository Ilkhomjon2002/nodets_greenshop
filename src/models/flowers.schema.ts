import { Schema, model } from "mongoose";

export interface IFlower {
	image: string;
	title: string;
	description: string;
	type: "gardening" | "homepot" | "domestic";
}

const flowerSchema = new Schema<IFlower>({
	image: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
		enum: ["gardening", "homepot", "domestic"],
	},
});

export default model<IFlower>("flower", flowerSchema);
