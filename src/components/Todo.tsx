import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

const Todo = ({ text, id, category }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  // const onClick = (newCategory: ITodo["category"]) => {};
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          Todo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
    </li>
  );
};

export default Todo;
