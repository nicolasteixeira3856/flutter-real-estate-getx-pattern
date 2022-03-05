const express = require("express");
const estatesRouter = express.Router();
const estateController = require("../controllers/estateController");
const auth = require("../middlewares/auth");

estatesRouter.post("/listAllEstates", auth, estateController.listAllEstates);
estatesRouter.post("/findStateById", auth, estateController.findStateById);

module.exports = estatesRouter;