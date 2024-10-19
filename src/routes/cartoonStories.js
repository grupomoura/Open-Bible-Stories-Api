const express = require("express");
const router = express.Router();
const cartoonStories = require("../stories/cartoonStories.json");

// Histórias bíblicas ilustradas
router.get("/", (req,res) => {
    return res.json(cartoonStories)
})

router.get("/1", (req,res) => {
    return res.json(cartoonStories.cartoonStories[0])
})

router.get("/2", (req,res) => {
    return res.json(cartoonStories.cartoonStories[1])
})

router.get("/3", (req,res) => {
    return res.json(cartoonStories.cartoonStories[2])
})

router.get("/4", (req,res) => {
    return res.json(cartoonStories.cartoonStories[3])
})

router.get("/5", (req,res) => {
    return res.json(cartoonStories.cartoonStories[4])
})

router.get("/6", (req,res) => {
    return res.json(cartoonStories.cartoonStories[5])
})

router.get("/7", (req,res) => {
    return res.json(cartoonStories.cartoonStories[6])
})

router.get("/8", (req,res) => {
    return res.json(cartoonStories.cartoonStories[7])
})

router.get("/9", (req,res) => {
    return res.json(cartoonStories.cartoonStories[8])
})

router.get("/10", (req,res) => {
    return res.json(cartoonStories.cartoonStories[9])
})

router.get("/11", (req,res) => {
    return res.json(cartoonStories.cartoonStories[10])
})

router.get("/12", (req,res) => {
    return res.json(cartoonStories.cartoonStories[11])
})

router.get("/13", (req,res) => {
    return res.json(cartoonStories.cartoonStories[12])
})

router.get("/14", (req,res) => {
    return res.json(cartoonStories.cartoonStories[13])
})

router.get("/15", (req,res) => {
    return res.json(cartoonStories.cartoonStories[14])
})

router.get("/16", (req,res) => {
    return res.json(cartoonStories.cartoonStories[15])
})

router.get("/17", (req,res) => {
    return res.json(cartoonStories.cartoonStories[16])
})

router.get("/18", (req,res) => {
    return res.json(cartoonStories.cartoonStories[17])
})

router.get("/19", (req,res) => {
    return res.json(cartoonStories.cartoonStories[18])
})

router.get("/20", (req,res) => {
    return res.json(cartoonStories.cartoonStories[19])
})

router.get("/21", (req,res) => {
    return res.json(cartoonStories.cartoonStories[20])
})

router.get("/22", (req,res) => {
    return res.json(cartoonStories.cartoonStories[21])
})

router.get("/23", (req,res) => {
    return res.json(cartoonStories.cartoonStories[22])
})

router.get("/24", (req,res) => {
    return res.json(cartoonStories.cartoonStories[23])
})

router.get("/25", (req,res) => {
    return res.json(cartoonStories.cartoonStories[24])
})

router.get("/26", (req,res) => {
    return res.json(cartoonStories.cartoonStories[25])
})

router.get("/27", (req,res) => {
    return res.json(cartoonStories.cartoonStories[26])
})

router.get("/28", (req,res) => {
    return res.json(cartoonStories.cartoonStories[27])
})

router.get("/29", (req,res) => {
    return res.json(cartoonStories.cartoonStories[28])
})

router.get("/30", (req,res) => {
    return res.json(cartoonStories.cartoonStories[29])
})

router.get("/31", (req,res) => {
    return res.json(cartoonStories.cartoonStories[30])
})

router.get("/32", (req,res) => {
    return res.json(cartoonStories.cartoonStories[31])
})

router.get("/33", (req,res) => {
    return res.json(cartoonStories.cartoonStories[32])
})

router.get("/34", (req,res) => {
    return res.json(cartoonStories.cartoonStories[33])
})

router.get("/35", (req,res) => {
    return res.json(cartoonStories.cartoonStories[34])
})

router.get("/36", (req,res) => {
    return res.json(cartoonStories.cartoonStories[35])
})

router.get("/37", (req,res) => {
    return res.json(cartoonStories.cartoonStories[36])
})

router.get("/38", (req,res) => {
    return res.json(cartoonStories.cartoonStories[37])
})

router.get("/39", (req,res) => {
    return res.json(cartoonStories.cartoonStories[38])
})

router.get("/40", (req,res) => {
    return res.json(cartoonStories.cartoonStories[39])
})

router.get("/41", (req,res) => {
    return res.json(cartoonStories.cartoonStories[40])
})

router.get("/42", (req,res) => {
    return res.json(cartoonStories.cartoonStories[41])
})

router.get("/43", (req,res) => {
    return res.json(cartoonStories.cartoonStories[42])
})

router.get("/44", (req,res) => {
    return res.json(cartoonStories.cartoonStories[43])
})

router.get("/45", (req,res) => {
    return res.json(cartoonStories.cartoonStories[44])
})

router.get("/46", (req,res) => {
    return res.json(cartoonStories.cartoonStories[45])
})

router.get("/47", (req,res) => {
    return res.json(cartoonStories.cartoonStories[46])
})

router.get("/48", (req,res) => {
    return res.json(cartoonStories.cartoonStories[47])
})

router.get("/49", (req,res) => {
    return res.json(cartoonStories.cartoonStories[48])
})

router.get("/50", (req,res) => {
    return res.json(cartoonStories.cartoonStories[49])
})

// Exportando o router
module.exports = router;