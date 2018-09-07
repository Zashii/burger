var express = require("express");
var burger = require("../models/burger.js");

module.exports = function(app) {


    app.get("/", function(req, res) {

        burger.selectAll(function(args){
           res.render("index", { burgers2: args});
        });
       
    });



    app.get("/:abc", function(req, res) {


        burger.selectAll(function(args){
           res.render("index", { burgers2: args});
        });
          
        
    });

    app.post("/api/add/:id", function(req, res) {

        burger.insertOne(req.params.id, function(args){
            res.redirect("/");
        });
       
   });

    app.post("/api/eat/:id", function(req, res) {

         burger.updateOne(req.params.id, function(args){
            res.redirect("/");
         });

        
    });

};
