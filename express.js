const express = require('express');
const path = require('path')

//const app = express();

const app = express();

// console.log(app);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));   
});

app.post('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'table.html'))
})

app.get('/about', (req, res) =>  res.send('<h1 style="color: red;">This is about page</h1>'))

app.listen(3008, () => {
    console.log('server started')
    //console.log(__filename);
})