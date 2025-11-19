import { useState, useEffect } from "react";

export default function List({ setPage }) {
  const [list, setList] = useState([]);

  //データの管理運営はこのコンポーネントでやりたい。だからここに書く。
  const problemList = async () => {
    try {
      const res = await fetch("/api/problems");
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
        return "０日！！※ 今日が期限です！";
      } else if (deadlineDays < 0) {
        return `${Math.abs(deadlineDays)}日前に期限が過ぎた事案です`;
      }
      return `残り日数：${deadlineDays}日`;
    }
  }

  useEffect(() => {
    problemList();
  }, []);

  useEffect(() => {
    deadline();
  }, []);

  return (
    <>
      <h1>困り事一覧</h1>
      <p>
        ※ここは、いろんな困り事を一覧で見れるよ！
        <br />
        自分の投稿だけ見ることもできるよ！
      </p>
      <br />
      {list.map((item) => (
        <div className="problem" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>依頼日：{new Date(item.created_at).toLocaleDateString()}</p>
          {/* new Date(item.created_at).toLocaleDateString() new Dateで日型にしてるから、.toLocalDeteString()が使える、 */}
          <p>
            期限：
            {item.limit ? new Date(item.limit).toLocaleDateString() : "なし"}
          </p>
          <p>{deadline(item.limit, item.created_at)}</p>
        </div>
      ))}
      <button
        onClick={() => {
          setPage("home");
        }}
      >
        ホーム画面に戻る
      </button>
    </>
  );
}
