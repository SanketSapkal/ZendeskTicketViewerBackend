// require node zendesk api
var Zendesk = require('zendesk-node-api');

// zendesk api instance
var zendesk = new Zendesk({
    url: "https://zcc52495.zendesk.com/",
    email: "sapkal@usc.edu",
    token: "V1TiXwYIcYlZvhTmAGtUf1FPyRiE8rYBVmhVwnNJ"
});

function TicketsUtil() {}

// Return all the tickets from Zendesk org.
TicketsUtil.prototype.getAllTickets = function (res) {
    zendesk.tickets.list().then(function (tickets) {
        res.end(JSON.stringify(tickets));
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = TicketsUtil;
