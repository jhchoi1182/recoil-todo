import React from "react";
import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useRecoilValue(todoState);
  return (
    <>
      <h1>투두 리스트</h1>
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
