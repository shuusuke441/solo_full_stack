import { useState } from "react";

export default function List({ setPage, problems }) {
  //データの管理運営はこのコンポーネントでやりたい。だからここに書く。

  //   const addProblem = (tilte) => setProblems([...problems, tilte]);
  const dummy = [
    {
      id: 1,
      titile: "PC",
      description: "赤まむし",
      limit: "2025-11-22",
      image: null,
    },
    {
      id: 2,
      titile: "excel",
      description: "ひつまぶし",
      limit: "2025-11-21",
      image: null,
    },
  ];

  return (
    <>
      <h1>困り事一覧</h1>
      <p>
        ※ここは、いろんな困り事を一覧で見れるよ！
        <br />
        自分の投稿だけ見ることもできるよ！
      </p>
      <br />
      {dummy.map((item) => (
        <div className="problem" key={item.id}>
          <h3>{item.titile}</h3>
          <p>{item.description}</p>
          <p>期限：{item.limit}</p>
        </div>
      ))}
      {/* <br />
      <ul>
        {problems.map((elm, index) => (
          <li key={index}>
            <button>Delete</button>
            <button>Edit</button>
            {elm}
          </li>
        ))}
      </ul> */}
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
