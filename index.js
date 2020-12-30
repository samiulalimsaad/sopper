const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const logger = require("morgan");
const home = require("./controller/home");
const men = require("./controller/men");
const women = require("./controller/women");
const kids = require("./controller/kids");
const digital = require("./controller/digital");
const otherService = require("./controller/otherService");
const furniture = require("./controller/furniture");
const { cartsGet, cartsPost, cartsRemove } = require("./controller/carts");

const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/otherService", otherService);
app.get("/furniture", furniture);
app.get("/digital", digital);
app.get("/carts", cartsGet);
app.get("/women", women);
app.get("/kids", kids);
app.get("/men", men);
app.get("/", home);

app.post("/carts", cartsPost);
app.patch("/carts", cartsRemove);

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
    console.log(chalk.green.inverse(`server is running at port ${PORT}`));
});
