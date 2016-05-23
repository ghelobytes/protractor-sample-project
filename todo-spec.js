describe('angularjs homepage todo list', function() {

    function makeRequest(opts) {
        var f = function() {
            var deferred = protractor.promise.defer();
            var request = require("request");
            request({
                uri: opts.url,
                method: opts.method || 'GET'
            }, function(error, response, body) {
                deferred.fulfill(body);
            });
            return deferred.promise;
        };
        return protractor.promise.controlFlow().wait(f);
    }

    it('should work or else', function() {
        var request;

        // test url 1
        request = makeRequest({
            url: 'https://ivr-dot-javelin-dev.appspot.com/ivr/welcome?From=234323',
        });
        request.then(function(result) {
            console.log('\n\nTest 1 done: ', result);
        });

        // test url 2
        request = makeRequest({
            url: 'https://ivr-dot-javelin-dev.appspot.com/ivr/get-id',
            method: 'POST'
        });
        request.then(function(result) {
            console.log('\n\nTest 2 done: ', result);
        });

    });

});
