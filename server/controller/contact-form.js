import { Contact } from "../model/contact-model.js";

export const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(200).send({ message: "message send successfully" });
  } catch (error) {
    res.status(500).json({ message: "message not deliver" });
  }
};
