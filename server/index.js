import express from "express";
import mongoose from "mongoose";
import config from "config";
import router from "./routers/rout.js";
import {cors} from './middleware/cors.middleware.js'

const connectionString = config.dbUrl;
const PORT = 5000;
const app = express();



try { 
    app.use(cors);
    app.use(express.json());
    app.use("/api", router);
} catch (error) {
    console.log(error)
}


async function startApp() {
  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true });
    app.listen(5000, () => console.log("server was started  on port!", PORT));
  } catch (error) {
    console.log(error); 
  }
}
try {
    startApp();
} catch (error) {
    console.log(error)
}

