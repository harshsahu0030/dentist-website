import express from "express";
import appointmentModel from "../model/appointmentModel.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.render("home");
});

router.route("/about-us").get((req, res) => {
  res.render("about");
});

router.route("/services").get((req, res) => {
  res.render("services");
});

router.route("/contact").get((req, res) => {
  res.render("contact");
});

router.route("/contact").post(async (req, res) => {
  try {
    await appointmentModel.create(req.body);
    res.render("contact", { message: "Form submitted successfully" });
  } catch (error) {
    console.log(`Error in submitting form  : ${error}`);
  }
});

export default router;
