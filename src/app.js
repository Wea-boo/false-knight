const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const connectToDB = require('./utils/db');
const charRoutes = require('./routes/charRoutes');
const errorHandler = require('./middlewares/error');

const app = express();
// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Use character routes
app.use('/characters', charRoutes);

// Use the error handling middleware
app.use(errorHandler);

async function startServer() {
    try {
        await connectToDB(process.env.DATABASE_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error while starting the server:', error); // error handling middleware is for the routes, not this
    }
}

startServer();