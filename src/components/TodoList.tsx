import React from "react";
import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, doing, done] = useRecoilValue(todoSelector);
  console.log(todo);

  return (
    <>
      <h1>투두 리스트</h1>
      <CreateTodo />
      <h2>To Do</h2>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
    </>
  );
};

export default TodoList;
