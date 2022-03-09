
//  A REST API 
//  Creator: Md. Nayem Molla 
//  ID: 1910476108
 

const express = require("express");

// Requiring the dishRouter and promoRouter which is on Router file 
const dishRouter = require("./Router/dishRouter");
const promoRouter = require("./Router/promoRouter");

const app = express();

app.use(express.json());

// For the dishRouter
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);

// Creating a server on 3000 port 
app.listen(3000, () => {
  console.log("Listening on port 3000....");
});