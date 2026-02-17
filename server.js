const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/api/test', (req, res) => {
    res.json({
        status: 'success',
        data: {
            id: 1,
            name: 'Test Request',
            method: 'GET',
            url: req.originalUrl,
            timestamp: new Date().toISOString()
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
