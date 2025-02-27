const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML + Fonts)
app.use(express.static(path.join(__dirname, '../templates')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/sample.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
