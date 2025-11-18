import { useState } from "react";
import List from "./List";

export default function Form({ setPage }) {
  const [title, setTilte] = useState("");
  const [description, setDiscription] = useState("");
  const [limit, setLimmit] = useState("");
  const [image, setImage] = useState("");

  function resetForm() {
    setTilte("");
    setDiscription("");
    setLimmit("");
    setImage("");
  }

  const handleAddProblem = async () => {
    if (title === "" || description === "" || limit === "") return;
    try {
      await fetch("/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          image: image,
          limit: limit,
        }),
      });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

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
            className="form"
            type="text"
            value={title}
            onChange={(e) => {
              setTilte(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          詳細内容：
          <textarea
            className="form"
            value={description}
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          ></textarea>
        </label>{" "}
        <br />
        <label>
          期限：
          <input
            className="form"
            type="date"
            value={limit}
            onChange={(e) => setLimmit(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          添付：
          <input
            className="form"
            type="file"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>{" "}
        <br />
        <button onClick={handleAddProblem} className="form">
          投稿
        </button>
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
