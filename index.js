const express = require('express');
const path = require('path');
const octokit = require('@octokit/rest')();

const app = express();

app.get('/pull-requests', (req, res) => {
    octokit.authenticate({
        type: 'basic',
        username: 'erictaylorswift',
        password: 'HFw4fVWbGmtY'
    }); 

    octokit.pullRequests.getAll({
        owner: 'RoomRoster',
        repo: 'roomroster.v2',
        state: 'open'
    }).then(result => {return res.send({data: result})})
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Listening on ${port}');