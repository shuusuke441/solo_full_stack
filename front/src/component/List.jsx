import { useState, useEffect } from "react";

export default function List({ setPage }) {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState("");

  //ドロップダウン用の要素たち
  const genreList = [
    "その他",
    "PC",
    "設備",
    "JS",
    "Node.js",
    "knex.js",
    "powerApps",
    "Excel",
    "powerBI",
  ];

  //データの管理運営はこのコンポーネントでやりたい。だからここに書く。
  const problemList = async () => {
    try {
      const res = await fetch(`/api/problems?genre=${genre}`);
      const data = await res.json();

      console.log(data);
      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  // 依頼日時からの締め日までの残りの日時を計算する関数

  function deadline(limit, now) {
    if (!limit) return "期限はありません";
    else {
      const dayLimit = new Date(limit).toLocaleDateString();
      const dayCreated = new Date(now).toLocaleDateString();
      const deadlineSeconds = new Date(dayLimit) - new Date(dayCreated);
      const deadlineDays = deadlineSeconds / (1000 * 60 * 60 * 24);
      if (deadlineDays === 0) {
        return "期限まで０日！！※ 今日が期限です！";
      } else if (deadlineDays < 0) {
        return `${Math.abs(deadlineDays)}日前に期限が過ぎた事案です`;
      }
      return `残り日数：${deadlineDays}日`;
    }
  }
  //毎回ページがレンダリングされるたびに、一覧が更新される。
  useEffect(() => {
    problemList();
  }, [genre]);
  //同じように、日時が更新される。
  useEffect(() => {
    deadline();
  }, []);

  return (
    <>
      <h1>困り事一覧</h1>

      <div>
        ジャンル選択：
        <select
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
          id="pet-select"
        >
          {genreList.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <p>
        ※ここは、いろんな困り事を一覧で見れるよ！
        <br />
        ジャンル別で見ることもできるよ！
      </p>
      <button
        onClick={() => {
          setPage("home");
        }}
      >
        ホーム画面に戻る
      </button>
      <br />
      <div className="card">
        {list.map((item) => (
          <div className="problem" key={item.id}>
            <h3>
              〜困り事〜
              <br />
              {item.title}
            </h3>
            <p>詳細内容：{item.description}</p>
            <img
              src={item.image}
              alt="投稿されたイメージはありません"
              className="card-img"
            ></img>
            <p>依頼日：{new Date(item.created_at).toLocaleDateString()}</p>
            {/* new Date(item.created_at).toLocaleDateString() new Dateで日型にしてるから、.toLocalDeteString()が使える、 */}
            <p>ジャンル：{item.genre}</p>
            <p>
              期限：
              {item.limit ? new Date(item.limit).toLocaleDateString() : "なし"}
            </p>
            <p>{deadline(item.limit, item.created_at)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
