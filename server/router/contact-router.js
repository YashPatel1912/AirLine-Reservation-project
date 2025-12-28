import express from "express";
import { contactForm } from "../controller/contact-form.js";
const router = express.Router();

router.route("/contact/").post(contactForm);

export default router;
