import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categories, todoCategory, todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const todo = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(todoCategory);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    return setCategory(event.currentTarget.value as any);
  };

  return (
    <>
      <h1>투두 리스트</h1>
      <select value={category} onInput={onInput}>
        <option value={categories.TODO}>Todo</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
