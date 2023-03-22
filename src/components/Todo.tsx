import React from "react";
import { useSetRecoilState } from "recoil";
import { categories, ITodo, todoState } from "../atoms";

const Todo = ({ text, id, category }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== categories.TODO && (
        <button name={categories.TODO} onClick={onClick}>
          Todo
        </button>
      )}
      {category !== categories.DOING && (
        <button name={categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
