const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'samdb'
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
db.on('error', (err) => {
    console.error('Database error:', err);
    // Handle the error, e.g., try to reconnect
});
app.post('/login', (req, res) => {
    const VALUES = [
        req.body.email,
        req.body.password,
    ]
    const query = 'SELECT ID FROM user WHERE Email = ? AND Password = ?';
    db.query(query, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            return res.json({ message: 'User logged in successfully!', id: result[0].ID });
        } else {
            return res.json({ message: 'Wrong email or password!' });
        }
    });
});

app.post('/register', (req, res) => {
    const VALUES = [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.phoneNum
    ]
    const query = 'INSERT INTO `user` (Email, password, name, `Phone number`) VALUES (?)';
    ;
    db.query(query, [VALUES], (err, result) => {
        if (err) {
            return res.json({ message: err });
        } else {
            return res.json({ message: 'User registered successfully!' });
        }
    });
});

app.post('/update', (req, res) => {
    const { password, name, id } = req.body;
    const query = 'UPDATE user SET password = ?, name = ? WHERE ID = ?';
    db.query(query, [password, name, id], (err, result) => {
        if (err) {
            return res.json({ message: err });
        } else {
            return res.json({ message: 'User updated successfully!' });
        }
    });
});

app.post('/message', (req, res) => {
    const VALUES = [
        req.body.rate,
        req.body.message,
        req.body.id,
    ]
    const query = 'INSERT INTO `messages` (rate, message, userID) VALUES (?)';
    db.query(query, [VALUES], (err, result) => {
        if (err) {
            return res.json({ message: err });
        } else {
            return res.json({ message: 'Message sent successfully!' });
        }
    });
});

app.listen(8081, () => {
    console.log('Server is running');
});
