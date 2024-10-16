import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://dridihatem1396:${password}@devcluster.7ijp8.mongodb.net/?retryWrites=true&w=majority&appName=devcluster`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("dridihatem1396");
export default db;
