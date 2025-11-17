const cors = require("cors");
const path = require("path"); //元々Nodeに入ってるもの
const express = require("express"); //expressを持ってきてる
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost5173",
  }) //ここでこのポートでのアクセスは許可することを書いている。
);

app.use(express.static(path.join(__dirname, "/public"))); //静的ファイルを使うと示してる__dirnameは今のディレクトリを書いてる。だから読み込むのは、/public

app.use("/api", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
