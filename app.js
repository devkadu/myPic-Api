require("dotenv").config();

const express = require('express');
const cors = require('cors');
const { connect } = require("mongoose");
const connectDb = require('./config/dbconfig')


connectDb();


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log("server running on port:", process.env.PORT);
});