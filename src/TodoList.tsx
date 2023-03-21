import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setErrorMsg("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) setErrorMsg("10자 이하입니다.");
  };
  console.log(errorMsg);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="투두" />
        <button>추가하기</button>
      </form>
      {errorMsg !== "" ? errorMsg : null}
    </div>
  );
};

export default TodoList;
