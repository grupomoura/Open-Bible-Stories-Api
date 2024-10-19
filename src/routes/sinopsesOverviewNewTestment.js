const express = require("express");
const router = express.Router();
const sinopsesOverview = require("../stories/sinopsesOverview.json");

// Sinopse e overview do novo testamento
router.get("/", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2])
})

router.get("/mat", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][1])
})

router.get("/mrk", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][2])
})

router.get("/luk", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][3])
})

router.get("/jhn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][4])
})

router.get("/act", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][5])
})

router.get("/rom", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][6])
})

router.get("/1co", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][7])
})

router.get("/2co", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][8])
})

router.get("/gal", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][9])
})

router.get("/eph", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][10])
})

router.get("/php", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][11])
})

router.get("/col", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][12])
})

router.get("/1th", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][13])
})

router.get("/2th", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][14])
})

router.get("/1ti", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][15])
})

router.get("/2ti", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][16])
})

router.get("/tit", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][17])
})

router.get("/phm", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][18])
})

router.get("/heb", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][19])
})

router.get("/jas", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][20])
})

router.get("/1pe", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][21])
})

router.get("/2pe", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][22])
})

router.get("/1jn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][23])
})

router.get("/2jn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][24])
})

router.get("/3jn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][25])
})

router.get("/jud", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][26])
})

router.get("/rev", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][27])
})

// Exportando o router
module.exports = router;