import React from "react";
import { useSetRecoilState } from "recoil";
import { categories, ITodo, todoState } from "../atoms";

const Todo = ({ text, id, category }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...oldTodos.slice(0, targetIndex), newToDo, ...oldTodos.slice(targetIndex + 1)];
    });
  };

  const onDelete = () => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.id !== id);
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
      <button onClick={onDelete}>삭제</button>
    </li>
  );
};

export default Todo;
