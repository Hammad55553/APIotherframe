const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', userRoutes);

// Sync database and start server
sequelize.sync()
    .then(() => {
        app.listen(8000, () => {
            console.log('Server is running on port 8000');
        });
    })
    .catch((err) => console.log('Error syncing database:', err));
