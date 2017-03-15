let util        = require('../support/utilities'),
    {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}) {
    Given('I open a websocket', function(callback)
    {
        util.startWebSocket(function() {
            console.log('startWebSocket');
            callback();
        });
    });


    When('I make a websocket request for {stringInDoubleQuotes}', function(request, callback) {
        util.socketRequest(request, function() {
            callback();
        });
    });


    Then('I get the correct response for {stringInDoubleQuotes}', function (response, callback) {
        // Write code here that turns the phrase above into concrete actions
        util.socketVerifyResponse(response, function() {
            callback();
        });
    });
});