var orm = require("../config/orm.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

   var burger = {

        selectAll : function(cb) {
            return orm.selectAll("burgers", cb);
        },

        insertOne: function(burger_name, cb) {
            return orm.insertOne("burgers", burger_name, cb);
        },
    
        updateOne: function(burger_name, cb) {
            return orm.updateOne("burgers", true, burger_name, cb);
        }
      };

// var result = orm.selectAll();

// console.log ("Burger.js");
// module.exports = result;
// module.exports = function(arg) {



//     // console.log(orm.selectAll(arg));
//     return orm.selectAll("burgers");


// }
 module.exports = burger;



        // return orm.selectAll();
        // burger2: burger.insertOne("burgers", "Cheeseburger");
        // res.render("index", {
        //     res.
        // });

        //  var dbQuery = "SELECT * FROM burgers";

        //  connection.query(dbQuery, function(err, result) {
        //    if (err) throw err;
        //    res.json(result);
        //  });

        //  dbQuery = burger;
        //  console.log("Hello" + dbQuery);   


// };
