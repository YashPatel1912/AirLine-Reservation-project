import { Passenger } from "../model/passenger-model.js";

export const passengerData = async (req, res) => {
  try {
    const { payment, passenger, flightData } = req.body;

    const response = new Passenger({
      passenger,
      flightData,
      payment,
    });

    await response.save();

    res.status(200).send({ message: "Ticket book successfully..." });
  } catch (error) {
    res.status(500).json({ message: "data not deliver" });
  }
};
