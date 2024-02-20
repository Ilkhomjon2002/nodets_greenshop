import { Router } from "express";
import flowerRoutes from "./flowerRoutes";

const routes = Router();

routes.use("/flower", flowerRoutes);

export default routes;
