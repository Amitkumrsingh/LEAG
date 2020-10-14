const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');


const app = express();

//connect database
connectDB();

//init Middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

