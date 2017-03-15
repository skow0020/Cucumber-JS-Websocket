let {defineSupportCode} = require('cucumber');


defineSupportCode(function({After, Before}) {
    Before(function () {
        // This hook will be executed before all scenarios
    });

    After(function () {
        // This hook will be executed after all scenarios
    });

    Before({tags: "@demo"}, function () {
        // This hook will be executed before scenarios tagged with @demo
    });

    After({tags: "@demo"}, function () {
        // This hook will be executed after scenarios tagged with @demo
    });
});