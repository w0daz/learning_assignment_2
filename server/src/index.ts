import app from './app'; // Import the configured Express application

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
