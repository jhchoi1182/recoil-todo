import React from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
};

export default App;
