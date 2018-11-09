const tableData = require("../data/table");
const waitingData = require("../data/waiting");


module.exports = function (app) {

    app.get('/api/tables', function (req, res) {
        return res.json(tableData)
    });

    app.get('/api/waiting', function (req, res) {
        res.json(waitingData)
    });

    app.post("/api/reservations", function (req, res) {
        let newreservation = req.body;
        //newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
        console.log(newreservation);

        if (tableData.length < 5) {
            tableData.push(newreservation);
            res.json(newreservation)
        } else {
            waitingData.push(newreservation);
            res.json(newreservation)
        }
    });
};