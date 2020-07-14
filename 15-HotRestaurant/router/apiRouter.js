// LOAD DATA 
// we're linking our routes to a series of DATA sources.
// they hold arays of information on tabale-data waiting list or so on.

var tableDAta = require('../data/tabledata');
var waitingListData = require('../data/waitingListData');

module.exports = function(app) {

    // API get requests 
    // the code below handles when users visit our page.
    // in each of the following cases when a user visits a link.
    // example(localhost:port/api/admin)
    
app.get("/api/tables", function(req, res) {
    res.json(tableDAta);
  });

  app.get("/", function(req, res) {
    res.json(waitingListData);
  });

  app.post("/api/tables", function(req, res) {
      if(tableDAta.length < 5){
          tableDAta.push(req.body);
          res.json(true);
      }
      else{
          waitingListData.push(req.body);
          res.json(false);
      }
  });

  app.post("/api/clear", function() {
      tableDAta = [];
      waitingListData = [];
      console.log(tableDAta)
      });
};