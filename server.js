const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());







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


// Start Server =========================================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});