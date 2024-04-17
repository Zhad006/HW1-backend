const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is a product page.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`);
});