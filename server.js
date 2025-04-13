const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Sample endpoint for reporting extreme weather events
app.post('/report', (req, res) => {
    const { eventType, location, description } = req.body;
    // Here you would typically save the report to a database
    console.log(`Reported Event: ${eventType} at ${location} - ${description}`);
    res.status(201).json({ message: 'Event reported successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
