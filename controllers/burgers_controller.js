var express = require("express");
var burger = require("../models/burger.js");

module.exports = function(app) {


    app.get("/", function(req, res) {

        burger.selectAll(function(args){
           console.log("home");
           console.log(args);
           res.render("index", { burgers2: args});
        });
       
    });



    app.get("/:abc", function(req, res) {


        burger.selectAll(function(args){
           console.log(args);
           res.render("index", { burgers2: args});
        });
          
        
    });

    app.get("/api/add/:id", function(req, res) {

        burger.insertOne(req.params.id, function(args){
            //console.log(args);  
            // console.log(req.params.id + " successfully deleted");
            res.redirect("/");
        });

        // burger.selectAll(function(args){
        // //    console.log(args);
        // //    res.render("index", { burgers2: args});
        // });
         
       
   });

    app.get("/api/eat/:id", function(req, res) {

         burger.updateOne(req.params.id, function(args){
           // console.log(args);  
            // console.log(req.params.id + " successfully deleted");
            res.redirect("/");
         });

        //  burger.selectAll(function(args){
        //     console.log(args);
        //     res.render("index", { burgers2: args});
        //  });
          
        
    });

};
