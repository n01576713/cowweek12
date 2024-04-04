const express = require('express');
const app = express();

// const myDetails = {
//     name: "Rodrik",
//     age: "19",
//     email: "rodirkmartincami@gmail.com"
// };

app.get('/', (req, res) => {
    res.send('');
    console.log("Apple")
});

// app.get('/greet/:name', (req, res) => {
//     console.log("End");
//     const { name } = req.params;
//     res.send(`Hi ${name}`);
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
