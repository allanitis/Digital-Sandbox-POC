let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://api.sandbox.transferwise.tech/v1/rates`,
        method: 'get',
        query: { "source": "usd", "target": "eur" },
        headers: { "Accept": "application/json" }
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
    });

    callback(null, { "message": "Successfully executed" });
}