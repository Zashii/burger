var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
        cb(result)
    });

  },

  insertOne: function(tableInput, value, cb) {
    var queryString = "INSERT INTO ?? SET ?";

    connection.query(queryString, [tableInput, {burger_name: value}, cb], function(err, result) {
      if (err) throw err;

        cb(result);

    })
  },

   updateOne: function(tableInput, value, propertyValue, cb) {
     var queryString = "UPDATE ?? SET ? WHERE ?";

     connection.query(queryString, [tableInput, {devoured: value}, {burger_name:propertyValue}], function(err, result) {
       if (err) throw err;

       cb(result);
    })
  } 
}


module.exports = orm;
