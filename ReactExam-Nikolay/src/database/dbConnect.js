import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb://localhost:27017";
const DATA_BASE_NAME = "CarVilla";

async function connectDB() {
  await mongoose.connect(`${CONNECTION_STRING}/${DATA_BASE_NAME}`);

  console.log(`Connected to ${DATA_BASE_NAME} database!`);
}
 export default connectDB;
 
