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
    return res.json(sinopsesOverview.sinopsesOverview[0])
})

// Sinopse e overview do antigo testamento
app.get("/sinopsesOverview/oldTestment", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1])
})

app.get("/sinopsesOverview/oldTestment/gen", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][1])
})
app.get("/sinopsesOverview/oldTestment/exo", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][2])
})
app.get("/sinopsesOverview/oldTestment/lev", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][3])
})
app.get("/sinopsesOverview/oldTestment/num", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][4])
})
app.get("/sinopsesOverview/oldTestment/deu", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][5])
})
app.get("/sinopsesOverview/oldTestment/jos", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][6])
})
app.get("/sinopsesOverview/oldTestment/jdg", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][7])
})
app.get("/sinopsesOverview/oldTestment/rut", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][8])
})
app.get("/sinopsesOverview/oldTestment/1sa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][9])
})
app.get("/sinopsesOverview/oldTestment/2sa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][10])
})
app.get("/sinopsesOverview/oldTestment/1ki", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][11])
})
app.get("/sinopsesOverview/oldTestment/2ki", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][12])
})
app.get("/sinopsesOverview/oldTestment/1ch", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][13])
})
app.get("/sinopsesOverview/oldTestment/2ch", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][14])
})
app.get("/sinopsesOverview/oldTestment/ezr", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][15])
})
app.get("/sinopsesOverview/oldTestment/neh", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][16])
})
app.get("/sinopsesOverview/oldTestment/est", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][17])
})
app.get("/sinopsesOverview/oldTestment/job", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][18])
})
app.get("/sinopsesOverview/oldTestment/psa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][19])
})
app.get("/sinopsesOverview/oldTestment/pro", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][20])
})
app.get("/sinopsesOverview/oldTestment/ecc", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][21])
})
app.get("/sinopsesOverview/oldTestment/sng", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][22])
})
app.get("/sinopsesOverview/oldTestment/isa", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][23])
})
app.get("/sinopsesOverview/oldTestment/ger", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][24])
})
app.get("/sinopsesOverview/oldTestment/lam", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][25])
})
app.get("/sinopsesOverview/oldTestment/ezk", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][26])
})
app.get("/sinopsesOverview/oldTestment/dan", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][27])
})
app.get("/sinopsesOverview/oldTestment/hos", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][28])
})
app.get("/sinopsesOverview/oldTestment/jol", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][29])
})
app.get("/sinopsesOverview/oldTestment/amo", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][30])
})
app.get("/sinopsesOverview/oldTestment/oba", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][31])
})
app.get("/sinopsesOverview/oldTestment/jon", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][32])
})
app.get("/sinopsesOverview/oldTestment/mic", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][33])
})
app.get("/sinopsesOverview/oldTestment/nam", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][34])
})
app.get("/sinopsesOverview/oldTestment/hab", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][35])
})
app.get("/sinopsesOverview/oldTestment/zep", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][36])
})
app.get("/sinopsesOverview/oldTestment/hag", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][37])
})
app.get("/sinopsesOverview/oldTestment/zec", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][38])
})
app.get("/sinopsesOverview/oldTestment/mal", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[1][39])
})


// Sinopse e overview do novo testamento
app.get("/sinopsesOverview/newTestment/mat", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][1])
})
app.get("/sinopsesOverview/newTestment/mrk", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][2])
})
app.get("/sinopsesOverview/newTestment/luk", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][3])
})
app.get("/sinopsesOverview/newTestment/jhn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][4])
})
app.get("/sinopsesOverview/newTestment/act", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][5])
})
app.get("/sinopsesOverview/newTestment/rom", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][6])
})
app.get("/sinopsesOverview/newTestment/1co", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][7])
})
app.get("/sinopsesOverview/newTestment/2co", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][8])
})
app.get("/sinopsesOverview/newTestment/gal", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][9])
})
app.get("/sinopsesOverview/newTestment/eph", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][10])
})
app.get("/sinopsesOverview/newTestment/php", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][11])
})
app.get("/sinopsesOverview/newTestment/col", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][12])
})
app.get("/sinopsesOverview/newTestment/1th", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][13])
})
app.get("/sinopsesOverview/newTestment/2th", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][14])
})
app.get("/sinopsesOverview/newTestment/1ti", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][15])
})
app.get("/sinopsesOverview/newTestment/2ti", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][16])
})
app.get("/sinopsesOverview/newTestment/tit", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][17])
})
app.get("/sinopsesOverview/newTestment/phm", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][18])
})
app.get("/sinopsesOverview/newTestment/heb", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][19])
})
app.get("/sinopsesOverview/newTestment/jas", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][20])
})
app.get("/sinopsesOverview/newTestment/1pe", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][21])
})
app.get("/sinopsesOverview/newTestment/2pe", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][22])
})
app.get("/sinopsesOverview/newTestment/1jn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][23])
})
app.get("/sinopsesOverview/newTestment/2jn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][24])
})
app.get("/sinopsesOverview/newTestment/3jn", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][25])
})
app.get("/sinopsesOverview/newTestment/jud", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][26])
})
app.get("/sinopsesOverview/newTestment/rev", (req,res) => {
    return res.json(sinopsesOverview.sinopsesOverview[2][27])
})




// Histórias bíblicas ilustradas
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