import { atom, selector } from "recoil";

export enum categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: categories;
}

export const todoCategory = atom<categories>({
  key: "category",
  default: categories.TODO,
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(todoCategory);
    return todos.filter((todo) => todo.category === category);
  },
});
