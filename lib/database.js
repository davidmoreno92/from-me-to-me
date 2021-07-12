import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const dbHost = "cluster0.c7iuu.mongodb.net";
const dbName = "my-diary";
const dbUser = "my-diary-user";
const dbPass = "5RrxzbFVSAD9Pyte";

const client = new MongoClient(
  `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("MCT");
  return next();
}

const middleware = nextConnect();
middleware.use(database);
export default middleware;
