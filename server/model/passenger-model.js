import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  passenger: {
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    birthDate: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
  },
  flightData: {
    fromCity: { type: String, required: true },
    toCity: { type: String, required: true },
    duration: { type: String, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: String, required: true },
    returnDate: {
      type: String,
      validate: {
        validator: function (value) {
          return (
            this.flightType !== "RoundTrip" ||
            (this.flightType === "RoundTrip" && value)
          );
        },
        message: "Return date is required for roundtrip flights.",
      },
    },
    flightType: {
      type: String,
      required: true,
      enum: ["oneway", "roundtrip"],
      lowercase: true,
    },
  },
  payment: {
    cardNumber: { type: Number, required: true },
    expireDate: { type: String, required: true },
    cvv: { type: Number, required: true },
  },
});

// const passengerSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   gender: { type: String, required: true },
//   birthDate: { type: Date, required: true },
//   phone: { type: Number, required: true },
//   email: { type: String, required: true },
// });

// const flightDataSchema = new mongoose.Schema({
//   fromCity: { type: String, required: true },
//   toCity: { type: String, required: true },
//   duration: { type: String, required: true },
//   departureTime: { type: String, required: true },
//   arrivalTime: { type: String, required: true },
//   price: { type: String, required: true },
//   flightType: { type: String, required: true },
//   date: { type: Date, required: true },
//   returnDate: { type: Date, required: true },
// });

// const paymentSchema = new mongoose.Schema({
//   cardNumber: { type: Number, required: true },
//   expireDate: { type: String, required: true },
//   cvv: { type: Number, required: true },
// });

// const bookingSchema = new mongoose.Schema({
//   passenger: { type: passengerSchema, required: true },
//   flightData: { type: flightDataSchema, required: true },
//   payment: { type: paymentSchema, required: true },
// });

export const Passenger = new mongoose.model("Passenger", passengerSchema);
