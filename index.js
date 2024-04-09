const express = require('express');
const mongoose = require('mongoose');
const app = express();

// const myDetailsSchema = new Schema({
//     name: String,
//     age: String,
//     email: String
// });

app.get('/', (req, res) => {
    res.send('Orange Chicken');
    console.log("Apple");
});

mongoose.connect('mongodb+srv://n01576713:ELYWaGqnbKm2HxA9@cluster0.0dh6sav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});