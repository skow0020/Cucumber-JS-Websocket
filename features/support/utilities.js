let test_data   = require('../../data/test_data'),
    should      = require('should'),
    webSocket   = require('ws'),
    ws;

module.exports = {

    startWebSocket : function(callback)
    {
        ws = new webSocket(
            'wss://echo.websocket.org',
            null,
            null);

        return callback();
    },

    closeWebSocket : function(callback)
    {
        ws.close();
        return callback();
    },

    socketRequest : function(requestType, callback)
    {
        ws.on('open', function () {
            console.log("In open");
            let request_data = module.exports.getJsonObj(requestType, "request");

            ws.send(JSON.stringify(request_data));
            console.log("SENTS")
            return callback();
        });
    },

    socketVerifyResponse : function(requestType, callback)
    {
        let json, exp_data;

        ws.on('message', function(data) {
            console.log("In message");
            json = JSON.parse(data);
            exp_data = module.exports.getJsonObj(requestType, "response");

            should.deepEqual(json, exp_data, "\n\tExpected: "+ JSON.stringify(exp_data) +" \n\t Actual: "+JSON.stringify(json));

            return callback();
        });

        ws.on('error', function (error) {
            should.fail(`Test failed du to websocket error: ${error}`)
        });
    },

    getJsonObj : function(requestType, requestOrResponse) {
        let type;
        switch (requestType)
        {
            case "example":
                type = test_data.example;
                break;
            default:
                should.fail("Function not implemented correctly");
                type = test_data.example;
                break;
        }
        switch (requestOrResponse)
        {
            case "request":
                return type.request;
                break;
            case "response":
                return type.response;
                break;
            default:
                should.fail("Function not implemented correctly");
                return type;
                break;
        }
    },
};