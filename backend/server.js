require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err)=> console.log(err));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


app.get('/',(req,res) => {
    res.send("Campus Resource Sharing Backend is running");
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
    console.log(`Test your POST API locally at: http://localhost:${port}/api/products`);
});