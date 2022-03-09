//  Creator: Md. Nayem Molla 
//  ID: 1910476108

// The Node module dishRouter.js to implements the Express 
//router for the /dishes/:dishId REST API end point.

const express = require("express");

const dishRouter = express.Router();

// GET, PUT, POST and DELETE operations on /dishes .
dishRouter.get("/", (req, res) => {
  res.send("Will send all the dishes to you!");
});

dishRouter.post("/", (req, res) => {
    res.send("Will add the dish: " + req.body.name + " with details: " +
        req.body.description
    );
  });

dishRouter.put("/", (req, res) => {
    res.status(403).send(`Put request not supported on /dishes`);
});

dishRouter.delete("/", (req, res) => {
    res.send(`Will Delete All Dishes`);
});

//GET, PUT, POST and DELETE operations on /dishes/:dishId end point.
dishRouter.get("/:dishId", (req, res) => {
  res.send(`Will send the dish of dish Id : ${req.params.dishId}`);
});


dishRouter.post("/:dishId", (req, res) => {
  res
    .status(403)
    .send(`Post request not Supported on /dishes/${req.params.dishId}`);
});

dishRouter.put("/:dishId", (req, res) => {
  res.write(`Updating the dish: ${req.params.dishId} \n`);
  res.end(
    `Will Update the dish: ${req.body.name} with details: ${req.body.description}`
  );
});

dishRouter.delete("/:dishId", (req, res) => {
  res.send(`Will Delete the dish by Id : ${req.params.dishId}`);
});

// exports the dishRouter 
module.exports = dishRouter;