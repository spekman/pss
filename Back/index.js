const express = require('express');
const router = require('./src/routes/routes');
const cors = require('cors');
const app = express();
const path = require('path');
const dir = path.join(__dirname, "../");
const dirhtml = path.join(__dirname, "../Front");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static(dir));

app.listen(4000, () => {
    console.log('porta 4000');
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: dirhtml });

});