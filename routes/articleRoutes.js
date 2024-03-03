const express = require("express");
const articleModel = require("../models/Article.ts");
const app = express();

app.use(express.json());

/* データの取得 */
app.get("/articles", async (req, res) => {
  //データベース内のすべてのデータを返す。
  const articles = await articleModel.find({});

  try {
    res.send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* データの作成 */
app.post("/article", async (req, res) => {
  const article = new articleModel(req.body);
  //console.log(req.body);

  try {
    await article.save();
    res.send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* データの部分修正 */
app.patch("/article/:id", async (req, res) => {
  try {
    await articleModel.findByIdAndUpdate(req.params.id, req.body);
    await articleModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/article/:id", async (req, res) => {
  try {
    const article = await articleModel.findByIdAndDelete(req.params.id);
    res.send(article);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
