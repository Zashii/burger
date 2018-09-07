var orm = require("../config/orm.js");

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

 module.exports = burger;

