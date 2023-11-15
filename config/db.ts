import mongoose from "mongoose";

const DB_URI = "mongodb://0.0.0.0:27017/Easepay1";
const LIVE_URI =
  "mongodb+srv://easypay:easypay@cluster0.8usbdhw.mongodb.net/easypayApi?retryWrites=true&w=majority";

const dbConfig = async () => {
  try {
    const connect = await mongoose.connect(LIVE_URI);
    console.log(`database is connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(`unable to connect to database ${error}`);
  }
};

export default dbConfig;
