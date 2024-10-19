const express = require("express");
const router = express.Router();
const sinopsesOverview = require("../stories/sinopsesOverview.json");

// Sinopses e overviews
router.get("/", (req,res) => {
    return res.json(sinopsesOverview)
})

router.get("/theBook", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[0])
})

// Exportando o router
module.exports = router;