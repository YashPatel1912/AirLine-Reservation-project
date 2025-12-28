import mongoose from "mongoose";

const URI =
  "mongodb+srv://airline-reservation:airline123@cluster0.sge7p.mongodb.net/airline_reservation_system?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.error("database connection failed");
    process.exit();
  }
  
};

export default connectDB;
