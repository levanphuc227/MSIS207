const express =require('express')
const mongoose =require('mongoose')
const Cors = require('cors')
const Videos = require('./dbModel.js')

const app = express()
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://video:lof9FZDfX1lEkLxI@cluster0.slj108v.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {

})

app.get('/', (req, res) => res.status(200).send("this is the bug"));

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);

        }
    })
    // res.status(201).send(dbVideos);
})
app.get('/v2/posts', (req, res) => {

    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);

        }
    })
});
app.listen(port, () => console.log(`Listening locallhost: ${port}`));