
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes definition
app.get('/', (req, res) => {
    res.send('Welcome! This is the homepage.');
});

app.get('/submit', (req, res) => {
    res.send('<form method="post" action="/submit-data"><input type="text" name="data"/><input type="submit" value="Submit"/></form>');
});

app.post('/submit-data', (req, res) => {
    const { data } = req.body;
    fs.appendFile('submissions.txt', `${data}
`, (err) => {
        if (err) throw err;
        res.send('Data received and saved.');
    });
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.');
});

app.listen(3000, () => console.log('Server running on port 3000'));
