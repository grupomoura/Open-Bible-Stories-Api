const express = require("express");
const router = express.Router();
const videosOverview = require("../stories/videosOverview.json");

// API New version videoOverview
router.get("/", (req, res) => {
    return res.json(videosOverview);
});

router.get("/oldTestment", (req, res) => {
    return res.json(videosOverview.oldTestment);
});

router.get("/newTestment", (req, res) => {
    return res.json(videosOverview.newTestment);
});

// Exportando o router
module.exports = router;
