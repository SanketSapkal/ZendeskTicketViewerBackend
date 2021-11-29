var express = require('express');
var router = express.Router();
var TicketsUtil = require('../src/tickets_util');

/* GET home page. */
router.get('/', function(req, res, next) {
    // Redirect to first page of tickets
    res.redirect('/ticketsOnPage/1');
});

// GET the ticket with specified ticketId.
router.get('/ticket/:ticketId', function (req, res) {
    const ticketId = parseInt(req.params.ticketId)
    res.setHeader('Content-Type', 'application/json');
    res.send("Got ticketId: " + ticketId);
});

// GET total number of tickets.
router.get('/tickets/count', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send("Current ticket count: 0");
});

// GET tickets on the given page number.
router.get('/ticketsOnPage/:pageNumber', function (req, res) {
    const pageNumber = parseInt(req.params.pageNumber);
    res.setHeader('Content-Type', 'application/json');
    res.send("Got page number: " + pageNumber);
});

router.get('/tickets/all', function (req, res) {
    var ticketsUtil = new TicketsUtil();
    ticketsUtil.getAllTickets(res);
});

module.exports = router;
