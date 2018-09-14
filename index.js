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
        state: 'open', 
        per_page: 5,
        page: 1,
    }).then((data) => {return res.send({data: data})})
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Listening on ${port}');