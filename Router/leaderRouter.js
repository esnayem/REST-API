//  Creator: Md. Nayem Molla 
//  ID: 1910476108

// The Node module leaderRouter.js implements the Express router
// for the /leaders  and /leaders/:leaderId REST API end points.

const express = require("express");

const leaderRouter = express.Router();

// GET, PUT, POST and DELETE operations on /leaders .
leaderRouter.get("/", (req, res) => {
  res.send(`will send all leaders`);
});

leaderRouter.post("/", (req, res) => {
  res.send(
    `This will add leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leaderRouter.put("/", (req, res) => {
    res.status(403).send(`put request not supported on /leaders`);
});

leaderRouter.delete("/", (req, res) => {
    res.send(`will delete all leaders`);
});

// GET, PUT, POST and DELETE operations on /leaders/:leaderId end point.
leaderRouter.get("/:leaderId", (req, res) => {
  res.send(`Will send leader of id: ${req.params.leaderId}`);
});

leaderRouter.post("/:leaderId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /leaders/${req.params.leaderId}`);
});

leaderRouter.put("/:leaderId", (req, res) => {
  res.write(`Updating the leader: ${req.params.leaderId}`);
  res.end(
    `will update the leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leaderRouter.delete("/:leaderId", (req, res) => {
  res.send(`will delete the leader of id: ${req.params.leaderId}`);
});

// exports the leaderRouter 
module.exports = leaderRouter;