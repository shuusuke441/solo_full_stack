import { useState } from "react";

export default function Form({ setPage }) {
  const [title, setTilte] = useState("");
  const [description, setDiscription] = useState("");
  const [limit, setLimmit] = useState("");
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("その他");

  const genreList = ["その他", "PC", "設備", "JS", "Node.js", "knex.js"];

  //イメージBBの

  function resetForm() {
    setTilte("");
    setDiscription("");
    setLimmit("");
    setImage(null);
  }

  const handleAddProblem = async () => {
    if (title === "" || description === "") return;
    else {
      try {
        const key = import.meta.env.VITE_IMAGEBB_KEY;
        // console.log(key);
        const formData = new FormData();
        formData.append("key", key);
        formData.append("image", image === "" ? null : image);
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const url = data.data.url;
        // console.log(url);

        await fetch("/api/problems", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            image: url,
            limit: limit,
            genre: genre,
          }),
        });
        resetForm();
      } catch (error) {
        console.error(error);
      }
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
        </label>
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
            onChange={(e) => {
              setImage(e.target.files[0]);
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
