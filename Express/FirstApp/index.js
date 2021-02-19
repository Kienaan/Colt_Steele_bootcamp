const express = require("express");
const app = express();

// console.dir(app)
app.get('/', (req, res) => {
    // console.log("We got a new request")
    res.send("Hey! We got your request")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('Posting a request now')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!!')
})

app.listen(3000, () => {
    console.log("Listening on this port!!!")
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})