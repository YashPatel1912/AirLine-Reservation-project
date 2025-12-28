import express from "express";
import authRouter from "./router/auth-router.js";
import contactRoute from "./router/contact-router.js";
import passengerRoute from "./router/passenger-router.js";
import connectDB from "./utils/db.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  Credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/passenger", passengerRoute);

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
});
