// Dependencies

var path = require('path');

// ROUTING


module.exports = function(app) {

    /// HTML
    // the code below handles when user visits our page
    // in each of the following cases when a user visits a link.

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });

      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
      });
     
      // if no matching routes reroute HOME.
      
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
      });

};