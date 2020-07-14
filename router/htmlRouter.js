// Dependencies

var path = require('path');

// ROUTING


module.exports = function(app) {

    /// HTML
    // the code below handles when user visits our page
    // in each of the following cases when a user visits a link.

    app.get("/view", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
      });

      app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/make.html'));
      });
     
      // if no matching routes reroute HOME.
      
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};