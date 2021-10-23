const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from my first ever node and express');
})

const users = [
    {id:0, name: "Shabana", email: "shabana@gmail.com"},
    {id:1, name: "Shabnoor", email: "shabana@gmail.com"},
    {id:2, name: "Sogir", email: "shabana@gmail.com"},
    {id:3, name: "Manna", email: "shabana@gmail.com"},
    {id:4, name: "Dilder", email: "shabana@gmail.com"}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['Mango','Apple', 'Banana']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy yummy tok marka fazli");
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.listen(port, () => {
    console.log('Listening to port', port);
});