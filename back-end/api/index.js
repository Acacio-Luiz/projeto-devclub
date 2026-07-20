import app from "../src/app.js";
import connectDatabase from "../src/databases/connection.js";

let connected = false;

export default async function handler(req, res) {
  if (!connected) {
    await connectDatabase();
    connected = true;
  }

  return app(req, res);
}