const express = require('express');
const path = require('path');
const octokit = require('@octokit/rest')();
const csp = require('content-security-policy');

const app = express();

const cspPolicy = {
    'report-uri': '/reporting',
    'default-src': csp.SRC_NONE,
    'script-src': [ csp.SRC_SELF, csp.SRC_DATA]
};

const globalCSP = csp.getCSP(csp.STARTER_OPTIONS);

app.use(globalCSP);

app.get('/pull-requests', globalCSP, (req, res) => {
    octokit.authenticate({
        type: 'basic',
        username: 'erictaylorswift',
        password: 'HFw4fVWbGmtY'
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