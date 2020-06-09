import mongoose from "mongoose";

function connection() {
  mongoose.connect("mongodb://localhost/tools", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connection;
