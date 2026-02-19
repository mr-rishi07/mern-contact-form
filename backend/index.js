const express = require('express');
const connectToDB = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router/contact.router');

dotenv.config();


const app = express();
const PORT = process.env.PORT;
connectToDB();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.use("/contact", router)

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`)
})
