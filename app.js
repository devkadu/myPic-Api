require("dotenv").config();

const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbconfig');
const authRoutes = require('./routes/auth.routes');
const authMiddleware = require('./middlewares/auth.middlewares');



connectDb();


const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//Routes
app.use('/auth', authRoutes);

app.use(authMiddleware);





app.listen(process.env.PORT, () => {
    console.log("server running on port:", process.env.PORT);
});