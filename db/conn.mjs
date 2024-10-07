import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

let conn;
try {
  console.log("Connecting to Local MongoDB");
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("telephone");

export default db;