Package.describe({
    summary: "Bar",
    version:"1.0.0",
    name: "bar",
});

Npm.depends({});

Package.onUse(function(api) {
    api.versionsFrom("1.4.0.1");

    api.use([
        "meteor",
        "ecmascript",
    ]);

    // WEAK DEPENDENCIES
    api.use([], {weak:true});

    // UNORDERED DEPENDENCIES (to solve
    api.use([
        'foo'
    ], {unordered:true});

    //EXPORT VARIABLES
    api.export([]);

});

Package.onTest(function (api) {

});