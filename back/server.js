const cors = require("cors");
const path = require("path"); //元々Nodeに入ってるもの
const express = require("express"); //expressを持ってきてる
const knex = require("./knex");
const { readSync } = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost5173",
  }) //ここでこのポートでのアクセスは許可することを書いている。
);

app.use(express.static(path.join(__dirname, "/public"))); //静的ファイルを使うと示してる__dirnameは今のディレクトリを書いてる。だから読み込むのは、/public

app.use(express.json());

app.get("/api/problems", async (req, res) => {
  const problemsList = await knex.select().from("problems");
  res.json(problemsList);
});

app.post("/api/problems", async (req, res) => {
  const result = req.body;
  console.log(result);
  const postData = await knex("problems")
    .insert({
      id: result.id,
      title: result.title,
      description: result.description,
      image: result.image,
      created_at: result.created_at,
    })
    .returning("*");

  res.json(postData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
