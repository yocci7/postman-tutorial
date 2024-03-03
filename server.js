const express = require("express")
const app = express()
const mongoose = require("mongoose")

const articleRouter = require("./routes/articleRoutes.js")

app.use(articleRouter)

// データベースと接続
mongoose.connect(
  "mongodb+srv://yocci7:usr6YecD95RHMsN@cluster0.veofnsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("データベースと接続に成功"))
.catch(() => console.log("データベースと接続に失敗"))


app.listen(3000, () => {
  console.log("Server Open")
})
