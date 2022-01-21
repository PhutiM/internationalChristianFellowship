const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./db');

app.use(cors());
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    const SELECT_QUERY = `SELECT * FROM user where username='${req.query.username}' and password='${req.query.password}'`
    connection.query(SELECT_QUERY, (err, response) => {
        console.log('response', response.length)
        if (err) { console.error(err) }
        else {
            if (response.length === 0) {
                res.send("user_not_found");
            } else {
                res.send("ok");
            }
        }
    })
})

app.get('/addPartner', (req, res) => {
    res.send('addPartner');
})

app.get('/partners', (req, res) => {
    res.send('addPartner');
})

app.get('/birthdays', (req, res) => {
    res.send('addPartner');
})

app.listen(4000, () => console.log('running on port 4000'))
