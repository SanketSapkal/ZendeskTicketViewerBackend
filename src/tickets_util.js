// require node zendesk api
var Zendesk = require('zendesk-node-api');

// zendesk api instance
var zendesk = new Zendesk({
    url: "https://zcc52495.zendesk.com/",
    email: "sapkal@usc.edu",
    token: "V1TiXwYIcYlZvhTmAGtUf1FPyRiE8rYBVmhVwnNJ"
});

function TicketsUtil() {}

// function fetchTickets() {
//     zendesk.tickets.list().then(function (tickets) {
//         console.log(tickets);
//         return tickets;
//     }).catch(function (error) {
//         console.error(error);
//     });
// }

// Return all the tickets from Zendesk org.
TicketsUtil.prototype.getAllTickets = function (res) {
    zendesk.tickets.list().then(function (tickets) {
        checkError(tickets, res);
        res.end(JSON.stringify(tickets));
    }).catch(function (error) {
        console.error(error);
    });
}

// Return all the tickets on the specified page number.
TicketsUtil.prototype.getTicketsOnPage = function (pageNumber, res) {
    const ticketsPerPage = 25;
    const firstTicketIndex = ticketsPerPage * (pageNumber - 1);

    // Fetch all the tickets from zendesk account and return only a slice of the
    // list
    zendesk.tickets.list().then(function (tickets) {
        checkError(tickets, res);
        res.end(JSON.stringify(tickets.slice(firstTicketIndex,
                                             firstTicketIndex + ticketsPerPage)));
    }).catch(function (error) {
        console.error(error);
    });
};

TicketsUtil.prototype.getTicket = function(ticketId, res) {
    zendesk.tickets.show(ticketId).then(function (ticket) {
        checkError(ticket, res);
        res.end(JSON.stringify(ticket));
    }).catch(console.error);
}

TicketsUtil.prototype.getTicketCount = function(res) {
    zendesk.tickets.list().then(function (tickets) {
        checkError(tickets, res);
        res.end(JSON.stringify({'ticketCount': tickets.length}));
    }).catch(function (error) {
        console.error(error);
    });
}

function checkError(returnedResult, res) {
    if(returnedResult === undefined || returnedResult === null) {
        const log = JSON.stringify({'error' : 'Unable to fetch data from Zendesk'});
        console.log("'error' : 'Unable to fetch data from Zendesk'");
        res.writeHead(400, log, { 'content-type': 'application/json' });
        res.end(log);
        return;
    }
}

module.exports = TicketsUtil;
