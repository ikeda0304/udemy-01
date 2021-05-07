import { useState } from "react";
import "./styles.css";
import InputTodo from "./components/InputTodo";
import InCompleteTodo from "./components/InCompleteTodo";
import CompleteTodo from "./components/CompleteTodo";

const App = () => {
  //入力した文字を取得
  const [todoText, setTodoText] = useState("");
  //未完了のTODOを定義
  const [incompleteTodo, setIncompleteTodo] = useState(["aaaa", "iiiii"]);
  //完了のTODOを定義
  const [completeTodo, setCompleteTodo] = useState(["uuu", "eee"]);

  //inputに入力した内容を検知して繁栄
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  //
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodo);
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  //戻す
  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodo.length >= 5}
      />
      {incompleteTodo.length >= 5 && <p>エラ〜メッセージ</p>}

      <InCompleteTodo
        todo={incompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todo={completeTodo} onClickBack={onClickBack} />
    </>
  );
};

export default App;
