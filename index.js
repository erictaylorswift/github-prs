require('sqreen');

const express = require('express');
const path = require('path');
const octokit = require('@octokit/rest')();
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
        type: 'oauth',
        key: '80b286200b365fe03d84',
        secret: '8dc91cc01517484022b3cb328687d6d22070c980'
    }); 

    octokit.pullRequests.getAll({
        owner: 'RoomRoster',
        repo: 'roomroster.v2',
        state: 'open',
        sort: 'created',
        direction: 'desc', 
        // per_page: 5,
        // page: 1,
    }).then((data) => {return res.send({data: data})})
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Listening on ${port}');