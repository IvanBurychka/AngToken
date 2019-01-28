const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models/User');
const jwt = require('jwt-simple');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const posts = [
    { message: 'hello' },
    { message: 'hi' }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res)=>{
    res.send(posts);
});

app.post('/register', (req, res)=>{
    const user = new User({ email: req.body.email, password: req.body.password });
    user.save()
        .then(() => {res.end()})
        .catch(err => res.end(err));
});

app.post('/login', async (req, res)=>{
    const userData = req.body;

    const user = await User.findOne({email: userData.email});

    if (!user) {
        return res.status(401).send({message: 'No such'});
    }

    if (userData.password !== user.password) {
        return res.status(401).send({message: 'No such'});
    }
    
    const payload = {email: user.email};

    const token = jwt.encode(payload, 'secret');
    
    res.status(200);
    res.send({token});
    // res.end('token');
});


app.listen(3000);