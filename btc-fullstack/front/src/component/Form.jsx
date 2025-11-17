import { useState } from "react";

export default function Form({ setPage }) {
  const [tilte, setTilte] = useState("");
  const [discription, setDiscription] = useState("");
  const [limmit, setLimmit] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <h1>困り事投稿画面</h1>
      <p>
        ※ここは、困り事投稿画面です！
        <br />
        質問などでもなんでも投稿してね！
      </p>

      <div id="form-set">
        <label>
          {" "}
          困りごとの題名：
          <input
            type="text"
            value={tilte}
            onChange={(e) => {
              setTilte(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          詳細内容：
          <textarea
            value={discription}
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          ></textarea>
        </label>{" "}
        <br />
        <label>
          期限：
          <input
            type="date"
            value={limmit}
            onChange={(e) => setLimmit(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          添付：
          <input
            type="file"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>{" "}
        <br />
      </div>

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
