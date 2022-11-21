const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const stories = require("./src/stories/stories.json")
const videoStories = require("./src/stories/videoStories.json")
const sinopsesOverview = require("./src/stories/sinopsesOverview.json")

app.get("/videostories", (req,res) => {
    return res.json(videoStories)
})

app.get("/videostories/oldTestment", (req,res) => {
    return res.json(videoStories.oldTestment)
})

app.get("/videostories/newTestment", (req,res) => {
    return res.json(videoStories.newTestment)
})

app.get("/sinopsesOverview", (req,res) => {
    return res.json(sinopsesOverview)
})

app.get("/sinopsesOverview/theBook", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview.theBook)
})

app.get("/sinopsesOverview/oldTestment", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview.oldTestment)
})

app.get("/sinopsesOverview/newTestment", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview.newTestment)
})

app.get("/stories", (req,res) => {
    return res.json(stories)
})

app.get("/stories/1", (req,res) => {
    return res.json(stories.stories[0])
})

app.get("/stories/2", (req,res) => {
    return res.json(stories.stories[1])
})

app.get("/stories/3", (req,res) => {
    return res.json(stories.stories[2])
})

app.get("/stories/4", (req,res) => {
    return res.json(stories.stories[3])
})

app.get("/stories/5", (req,res) => {
    return res.json(stories.stories[4])
})

app.get("/stories/6", (req,res) => {
    return res.json(stories.stories[5])
})

app.get("/stories/7", (req,res) => {
    return res.json(stories.stories[6])
})

app.get("/stories/8", (req,res) => {
    return res.json(stories.stories[7])
})

app.get("/stories/9", (req,res) => {
    return res.json(stories.stories[8])
})

app.get("/stories/10", (req,res) => {
    return res.json(stories.stories[9])
})

app.get("/stories/11", (req,res) => {
    return res.json(stories.stories[10])
})

app.get("/stories/12", (req,res) => {
    return res.json(stories.stories[11])
})

app.get("/stories/13", (req,res) => {
    return res.json(stories.stories[12])
})

app.get("/stories/14", (req,res) => {
    return res.json(stories.stories[13])
})

app.get("/stories/15", (req,res) => {
    return res.json(stories.stories[14])
})

app.get("/stories/16", (req,res) => {
    return res.json(stories.stories[15])
})

app.get("/stories/17", (req,res) => {
    return res.json(stories.stories[16])
})

app.get("/stories/18", (req,res) => {
    return res.json(stories.stories[17])
})

app.get("/stories/19", (req,res) => {
    return res.json(stories.stories[18])
})

app.get("/stories/20", (req,res) => {
    return res.json(stories.stories[19])
})

app.get("/stories/21", (req,res) => {
    return res.json(stories.stories[20])
})

app.get("/stories/22", (req,res) => {
    return res.json(stories.stories[21])
})

app.get("/stories/23", (req,res) => {
    return res.json(stories.stories[22])
})

app.get("/stories/24", (req,res) => {
    return res.json(stories.stories[23])
})

app.get("/stories/25", (req,res) => {
    return res.json(stories.stories[24])
})

app.get("/stories/26", (req,res) => {
    return res.json(stories.stories[25])
})

app.get("/stories/27", (req,res) => {
    return res.json(stories.stories[26])
})

app.get("/stories/28", (req,res) => {
    return res.json(stories.stories[27])
})

app.get("/stories/29", (req,res) => {
    return res.json(stories.stories[28])
})

app.get("/stories/30", (req,res) => {
    return res.json(stories.stories[29])
})

app.get("/stories/31", (req,res) => {
    return res.json(stories.stories[30])
})

app.get("/stories/32", (req,res) => {
    return res.json(stories.stories[31])
})

app.get("/stories/33", (req,res) => {
    return res.json(stories.stories[32])
})

app.get("/stories/34", (req,res) => {
    return res.json(stories.stories[33])
})

app.get("/stories/35", (req,res) => {
    return res.json(stories.stories[34])
})

app.get("/stories/36", (req,res) => {
    return res.json(stories.stories[35])
})

app.get("/stories/37", (req,res) => {
    return res.json(stories.stories[36])
})

app.get("/stories/38", (req,res) => {
    return res.json(stories.stories[37])
})

app.get("/stories/39", (req,res) => {
    return res.json(stories.stories[38])
})

app.get("/stories/40", (req,res) => {
    return res.json(stories.stories[39])
})

app.get("/stories/41", (req,res) => {
    return res.json(stories.stories[40])
})

app.get("/stories/42", (req,res) => {
    return res.json(stories.stories[41])
})

app.get("/stories/43", (req,res) => {
    return res.json(stories.stories[42])
})

app.get("/stories/44", (req,res) => {
    return res.json(stories.stories[43])
})

app.get("/stories/45", (req,res) => {
    return res.json(stories.stories[44])
})

app.get("/stories/46", (req,res) => {
    return res.json(stories.stories[45])
})

app.get("/stories/47", (req,res) => {
    return res.json(stories.stories[46])
})

app.get("/stories/48", (req,res) => {
    return res.json(stories.stories[47])
})

app.get("/stories/49", (req,res) => {
    return res.json(stories.stories[48])
})

app.get("/stories/50", (req,res) => {
    return res.json(stories.stories[49])
})


app.listen(port, () => {
    console.log("Server ON")
})