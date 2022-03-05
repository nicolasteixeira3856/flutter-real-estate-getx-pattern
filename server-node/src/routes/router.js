const express = require("express");
const userRouter = require("./userRouter");
const estateRouter = require("./estateRouter");
const favoriteRouter = require("./favoriteRouter");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("Bem-vindo a API de Imobiliária");
});

router.use("/users", userRouter);
router.use("/estates", estateRouter);
router.use("/favorites", favoriteRouter);

module.exports = router;