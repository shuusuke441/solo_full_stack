import { useState } from "react";

export default function List({ setPage }) {
  const [sample, setSample] = useState();
  return (
    <>
      <h1>困り事一覧</h1>
      <p>
        ※ここは、いろんな困り事を一覧で見れるよ！
        <br />
        自分の投稿だけ見ることもできるよ！
      </p>
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
