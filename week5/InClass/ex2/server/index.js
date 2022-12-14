const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const Pusher = require("pusher");
const Messages = require("./dbMessages.js");

const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://video:lof9FZDfX1lEkLxI@cluster0.slj108v.mongodb.net/?retryWrites=true&w=majority";

const pusher = new Pusher({
  appId: "1524599",
  key: "cd0c8e539d5f0329fa94",
  secret: "27460947f57248240122",
  cluster: "ap1",
  useTLS: true,
});

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected");
  const msgCollection = db.collection("messagingmessages");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error trigerring Pusher");
    }
  });
});

app.get("/", (req, res) => res.status(200).send("Hello UIT guys"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
