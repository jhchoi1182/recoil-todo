import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoCategory, todoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(todoCategory);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const addTodo = ({ todo }: IForm) => {
    setTodos((prev) => [{ text: todo, id: Date.now(), category }, ...prev]);
    setValue("todo", "");
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(addTodo)}>
        <input {...register("todo", { required: "글자를 입력해주세요." })} placeholder="todo를 적어보세요." />
        <button>추가하기</button>
      </form>
      <span>{errors.todo?.message}</span>
    </>
  );
};

export default CreateTodo;
