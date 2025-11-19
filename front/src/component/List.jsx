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

  useEffect(() => {
    problemList();
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
          <p>
            期限：
            {item.limit ? new Date(item.limit).toLocaleDateString() : "なし"}
          </p>
          <p>依頼日：{item.create_at}</p>
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
