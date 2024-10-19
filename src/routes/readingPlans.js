const express = require("express");
const router = express.Router();
const readingPlans = require("../readingPlans/readingPlans.json");

router.get("/", (req,res) => {
    return res.json(readingPlans)
})

router.get("/0", (req,res) => {
    return res.json(readingPlans["readingPlans"][0])
})

router.get("/1", (req,res) => {
    return res.json(readingPlans["readingPlans"][1])
})

// Exportando o router
module.exports = router;