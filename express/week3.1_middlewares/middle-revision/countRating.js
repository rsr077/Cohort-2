const express = require('express');
const app = express();

let totalTime = 0;
let requestCount = 0;

app.use((req, res, next) => {
    const start = process.hrtime(); // Start time

    res.on('finish', () => {
        const diff = process.hrtime(start);
        const duration = diff[0] * 1e3 + diff[1] / 1e6; // Convert to milliseconds
        totalTime += duration;
        requestCount++;
        console.log(`Average Request Time: ${(totalTime / requestCount).toFixed(4)} ms`);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
