const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

//Init middleware
app.use(express.json()); 

app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API...' }));

//Define Routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contacts.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));