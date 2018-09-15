require('sqreen');

const express = require('express');
const path = require('path');
const octokit = require('@octokit/rest')({
    timeout: 0,
    headers: {
        'user-agent': 'octokit/rest.js v6.1.0'
    },
});
const helmet = require('helmet');


const app = express();

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ['*'],
        imgSrc: ['*', 'data:']
    }
}));

app.get('/pull-requests', (req, res) => {
    octokit.authenticate({
        type: 'token',
        token: 'c8a437d837b2019d3d651e0cc7742b029fb573a7',
    }); 

    octokit.pullRequests.getAll({
        owner: 'RoomRoster',
        repo: 'roomroster.v2',
        state: 'open',
        sort: 'created',
        direction: 'desc', 
        per_page: 5,
        page: 1,
    }).then((data) => {return res.send({data: data})})
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Listening on ${port}');