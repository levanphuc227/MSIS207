const express = require("express");

const cors = require("cors")
const app = express()

// const whitelist = ["http://localhost:3000"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
// }
// app.use(cors(corsOptions))
app.use(express.json());
const messages = [
    {
        author: "SC",
        text: "Rolls complete and a pitch is program. One BRAVO.",
    },
    {
        author: "PAO",
        text: "One BRAVO is an abort control model. Altitude is 2 miles.",
    },
    {
        author: "CAPCOM",
        text: "All is well at Houston. You are good at 1 minute",
    },
];

app.get("/api/messages/:forum", (request, response) => {
    if (request.params && request.params.forum === "nasa") {
        return response.send(messages);
    }
    return response.status(404).send({ error: "Unknown forum" });
});
app.post("/api/messages/:forum", (request, response) => {
    if (request.params && request.params.forum === "nasa") {
        messages.push(request.body);
        return response.send("OK");
    }
    return response.status(404).send({ error: "Unknown forum" });
});
app.listen(5000, () => console.log(" Launched on port 5000!"));
