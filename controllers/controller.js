var path = require("path");
var main = require("../models/main");

module.exports = function (app) {

    // Routes //

    // Note: At URI '/' show index.html //
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });

    // Note: At URI '/app' show app.html //
    // app.get("/app", function (req, res) {
    //     res.sendFile(path.join(__dirname, "app.html"));
    // });

    // Note: At URI '/operator' show operator.html //
    // app.get("/operator", function (req, res) {
    //     res.sendFile(path.join(__dirname, "operator.html"));
    // });

    // GET all data from tracking_table //
    app.get("/api/tracking", function (req, res) {
        table = "tracking_table";
        main.all(table, function (data) {
            // console.log("tourInfo");
            // res.json(tourInfo);
            return res.json(data);
            // res.render("index",{tours:data});
        })
        // res.status(200).send(res);
        // res.render(this);
    });


    // Ship Engine Node.js //
    var request = require('request');

    // This is where parameters will be passed //
    var options = {
        method: "GET",
        url: 'https://api.shipengine.com/v1/tracking',
        qs: { carrier_code: 'ups', tracking_number: '[enter-tracking-number]' },
        headers:
            {
                'api-key': '[enter-api-key]',
                'accept': 'application/json'
            },
    };

    // Retrieve tracking information from Ship Engine API //
    app.get('/api/tracking/retrieve', function (req, res) {
        console.log('THIS IS RES: ', res);
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log(body)
                var trackingData = JSON.parse(body)
                // res.send(info);
                return res.json(trackingData);
                console.log('GET Tracking Number: ', trackingData.tracking_number);
            }
        })
    });

        // Val not coming through. Returning {} //
        app.post('/api/tracking/retrieve', function (req, res) {
            table = 'test_table';
            col = ['tracking_number', 'carrier_code'];
            val = [
                req.body.tracking_number, 
                req.body.carrier_code, 
            ];
    
            console.log('body: ', trackingData ),
            // console.log('Tracking Number and Carrier Code: ', val),
            // console.log('Tracking Number: ', req.body.tracking_number),
    
            main.create(table, col, val, function(data){
                res.json({ id: data.insertId, tracking_number: data.inserttracking_number});
                // res.json(data)
                console.log(data);
            })
        });

};

// Ship Engine Keys
    // user_id, 
    // tracking_number, 
    // carrier_code, 
    // status_code, 
    // status_description, 
    // carrier_status_code, 
    // carrier_status_description, 
    // ship_date, 
    // estimated_delivery_date, 
    // actual_delivery_date, 
    // exception_description, 
    // events, 
    // occurred_at, 
    // description, 
    // city_locality, 
    // state_province, 
    // postal_code, 
    // country_code, 
    // company_name, 
    // signer