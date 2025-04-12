const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Splitly!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});