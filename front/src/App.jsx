import "./App.css";
import { useState } from "react";
import Form from "./component/Form.jsx";
import List from "./component/List.jsx";
import TodoList from "./component/TodoList.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    //初期画面(選択)
    <>
      {page === "home" ? (
        <>
          <h1>PC関係困りごと窓口</h1>
          <h2>使いたい機能を選んでね</h2>
          <button id="problem-form" onClick={() => setPage("form")}>
            {" "}
            困り事投稿
          </button>
          <button id="List-of-problems" onClick={() => setPage("list")}>
            {" "}
            困り事一覧
          </button>
          <button id="todo-list-privet" onClick={() => setPage("ToDo")}>
            {" "}
            個人タスク管理画面
          </button>
        </>
      ) : page === "form" ? (
        <Form setPage={setPage} />
      ) : //Formコンポーネント画面に遷移
      page === "list" ? (
        <List setPage={setPage} />
      ) : (
        //Listコンポーネント画面に遷移
        <TodoList setPage={setPage} />
        //TodoListコンポーネント画面に遷移
      )}
    </>
  );
}

export default App;
