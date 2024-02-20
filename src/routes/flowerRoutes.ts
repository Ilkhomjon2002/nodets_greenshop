import { Router, Request, Response } from "express";
import flowerModel from "../models/flowers.schema";
import { IFlower } from "../models/flowers.schema";
const route = Router();
route.get("/", async (req: Request, res: Response) => {
	const { type } = req.query;
	return flowerModel
		.find({ type })
		.then((response: IFlower[]) => {
			res.status(200).json({
				message: "success",
				data: response,
			});
		})
		.catch(() => {
			res.status(400).json({
				message: "fail",
			});
		});
});
route.post("/", async (req: Request, res: Response) => {
	const { image, title, description, type } = req.body;

	return flowerModel
		.create({ image, title, description, type })
		.then(() => {
			res.status(200).json({
				message: "success",
			});
		})
		.catch(() => {
			res.status(400).json({
				message: "fail",
			});
		});
});
route.put("/:id", async (req: Request, res: Response) => {
	const { id } = req.params;
	const { image, title, description, type } = req.body;
	return flowerModel
		.updateOne(
			{ _id: id },
			{ $set: { image, title, description, type } },
			{ new: true }
		)
		.then(() => {
			res.status(200).json({
				message: "success",
			});
		})
		.catch(() => {
			res.status(400).json({
				message: "fail",
			});
		});
});
route.delete("/:id", async (req: Request, res: Response) => {
	console.log("delete flower/:id");

	const { id } = req.params;

	return flowerModel
		.findByIdAndDelete(id)
		.then((response) => {
			res.status(200).json({
				message: "success",
			});
		})
		.catch(() => {
			res.status(400).json({
				message: "fail",
			});
		});
});

export default route;
