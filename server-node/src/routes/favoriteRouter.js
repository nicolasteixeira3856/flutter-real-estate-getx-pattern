const express = require("express");
const favoritesRouter = express.Router();
const favoriteController = require("../controllers/favoriteController");
const auth = require("../middlewares/auth");

favoritesRouter.post("/listAllFavoritedEstatesByUserId", auth, favoriteController.listAllFavoritedEstatesByUserId);
favoritesRouter.post("/addFavorite", auth, favoriteController.addFavorite);
favoritesRouter.delete("/deleteFavorite/:userId/:estateId", auth, favoriteController.deleteFavorite);

module.exports = favoritesRouter;