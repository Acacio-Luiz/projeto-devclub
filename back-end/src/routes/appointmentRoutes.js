import { Router } from "express";
import AppointmentController from "../controllers/AppointmentController.js";

const routes = Router();

routes.get("/", AppointmentController.index);
routes.post("/", AppointmentController.store);
routes.delete("/:id", AppointmentController.destroy);

export default routes;