const express = require("express");
const router = express.Router();
const sinopsesOverview = require("../stories/sinopsesOverview.json");

// Sinopse e overview do antigo testamento
router.get("/", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1])
})
router.get("/gen", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][1])
})
router.get("/exo", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][2])
})
router.get("/lev", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][3])
})
router.get("/num", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][4])
})
router.get("/deu", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][5])
})
router.get("/jos", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][6])
})
router.get("/jdg", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][7])
})
router.get("/rut", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][8])
})
router.get("/1sa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][9])
})
router.get("/2sa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][10])
})
router.get("/1ki", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][11])
})
router.get("/2ki", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][12])
})
router.get("/1ch", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][13])
})
router.get("/2ch", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][14])
})
router.get("/ezr", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][15])
})
router.get("/neh", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][16])
})
router.get("/est", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][17])
})
router.get("/job", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][18])
})
router.get("/psa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][19])
})
router.get("/pro", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][20])
})
router.get("/ecc", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][21])
})
router.get("/sng", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][22])
})
router.get("/isa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][23])
})
router.get("/jer", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][24])
})
router.get("/lam", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][25])
})
router.get("/ezk", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][26])
})
router.get("/dan", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][27])
})
router.get("/hos", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][28])
})
router.get("/jol", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][29])
})
router.get("/amo", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][30])
})
router.get("/oba", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][31])
})
router.get("/jon", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][32])
})
router.get("/mic", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][33])
})
router.get("/nam", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][34])
})
router.get("/hab", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][35])
})
router.get("/zep", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][36])
})
router.get("/hag", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][37])
})
router.get("/zec", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][38])
})
router.get("/mal", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][39])
})

// Exportando o router
module.exports = router;