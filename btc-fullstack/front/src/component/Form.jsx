export default function Form({ setPage }) {
  return (
    <>
      <h1>困り事投稿画面</h1>
      <p>
        ※ここは、困り事投稿画面です！
        <br />
        質問などでもなんでも投稿してね！
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
