let express = require('express');
let cors = require('cors');
let app = express();
let port = 9000;

app.use(cors());

app.get('/ping', (req, res) => {
    res.send({
        message: 'Hello, GLS!!!, Welcome to the workshop on Node.js and Express.js',
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});