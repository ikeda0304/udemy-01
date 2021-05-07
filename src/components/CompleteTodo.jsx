import React from "react";

const CompleteTodo = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了TODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodo;
