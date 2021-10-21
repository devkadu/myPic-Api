require("dotenv").config();

const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbconfig');
const userRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');
const pictureRoutes = require('./routes/picture.routes')
const authMiddleware = require('./middlewares/auth.middlewares');



connectDb();


const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//Routes
app.use('/auth', authRoutes);

app.use(authMiddleware);

app.use('/', userRoutes);
app.use('/', pictureRoutes);




app.listen(process.env.PORT, () => {
    console.log("server running on port:", process.env.PORT);
});