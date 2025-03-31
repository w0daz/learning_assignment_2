import app from './app'; // Import the configured Express application
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const PORT = process.env.PORT || 5000; // Use PORT from .env, default to 5000

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
