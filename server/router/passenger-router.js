import express from "express";
const router = express.Router();
import { passengerData } from "../controller/passenger-controller.js";

router.route("/").post(passengerData);

export default router;
