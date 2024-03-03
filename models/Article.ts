const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
        link: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: true,
          default: "https://placehold.jp/256x144.png",
        },
        tag: {
          type: String,
          required: true,
        },
        headline: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        dataPublished: {
          type: String,
          required: true,
          default: "??/??"
        },
})

const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article
