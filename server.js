const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data ================================================================================================================

const tables = [];

const waiting = [];

// Routes ===============================================================================
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/make', function(req, res) {
    res.sendFile(path.join(__dirname, 'make.html'));
});

app.get('/view', function(req, res) {
    res.sendFile(path.join(__dirname, 'view.html'));
});



app.get('/api/tables', function(req, res) {
    return res.json(tables)
});

app.get('/api/waiting', function(req, res) {
    return res.json(waiting)
});



app.post("/api/reservations", function(req, res) {
    let newreservation = req.body;
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newreservation);
    if (tables.length < 5) {
        tables.push(newreservation);
        res.json(newreservation)
    } else {
        waiting.push(newreservation);
        res.json(newreservation)
    }
});

// Start Server =========================================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});