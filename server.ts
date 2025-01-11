import express from 'express';
import process from 'process';

const app = express();

app.get('/', (req, res) => {
    if (req.query.name) {
        res.send(`Hello ${req.query.name}`);
    } else {
        res.send('Hello World');
    }
});


app.listen(3000, () => {
    console.log('Server started')

    setInterval(() => {
        console.log('Running for', process.uptime(), 'seconds')
        console.log('Memory usage', process.memoryUsage())
    }, 1000)
});


