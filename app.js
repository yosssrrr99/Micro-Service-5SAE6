const express = require('express');
const mongoose = require('mongoose');
const sujetRouter = require('./routers/sujet');
const commentaireRouter = require('./routers/commentaire');

const PORT = process.env.PORT || 9001;
const eurekaHelper = require('./eureka-helper');





eurekaHelper.registerWithEureka('forumyosr', PORT);












const url = 'mongodb://127.0.0.1:27017/yosr';
const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on('open', function () {
    console.log('connected');
});

app.use(express.json())
app.use('/sujet', sujetRouter);
app.use('/commentaire', commentaireRouter);

 


app.listen (9001)