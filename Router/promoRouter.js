//  Creator: Md. Nayem Molla 
//  ID: 1910476108

// The Node module promoRouter.js implements the Express router 
// for the /promotions and /promotions/:promoId REST API end points.

const express = require("express");

const promoRouter = express.Router();

// GET, PUT, POST and DELETE operations on /promotions .

promoRouter.get("/", (req, res) => {
  res.send(`Will Send All the promotions`);
});

promoRouter.post("/", (req, res) => {
    res.send(
      `This will add promotion: ${req.body.name} with details : ${req.body.description}`
    );
});

promoRouter.put("/", (req, res) => {
    res.status(403).send(`put request not supported on /promotions`);
});

promoRouter.delete("/", (req, res) => {
    res.send(`will delete all promotions`);
});

// GET, PUT, POST and DELETE operations on /promotions/:promoId end points.
promoRouter.get("/:promoId", (req, res) => {
  res.send(`will send promotion of id : ${req.params.promoId}`);
});

promoRouter.post("/:promoId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /promotions/${req.params.promoId}`);
});

promoRouter.put("/:promoId", (req, res) => {
  res.write(`Updating the promotion: ${req.params.promoId} \n`);
  res.end(
    `will Update the promotion: ${req.body.name} with details: ${req.body.description}`
  );
});

promoRouter.delete("/:promoId", (req, res) => {
  res.send(`will delete the promotion of Id: ${req.params.promoId}`);
});
// exports the promoRouter 
module.exports = promoRouter;