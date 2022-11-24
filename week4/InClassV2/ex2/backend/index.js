const express =require('express')
const mongoose =require('mongoose')
const Cors =require('cors')
const Cards =require('./model/dbCards.js')

const app = express()
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://hw4:75hwjb66vAAPJFvX@hw.ufteeco.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
})

app.get('/', (req, res) => {
    return res.status(200).send("hello the web dev");
})
app.post('/dating/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {

            res.status(201).send(data)
        }
    })
})

app.listen(port, () => console.log(`listening on localhost: ${port}`))