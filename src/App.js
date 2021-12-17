import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import { LoginButton } from "./components/LoginButton";
import { useSelector } from "react-redux";
import { LogoutButton } from "./components/LogoutButton";
const App = () => {
  const { isAuth } = useSelector((state) => state.todos);
  return (
    <div className="container bg-white p-4 mt-5">
      {!isAuth && <LoginButton />}
      {!!isAuth && <LogoutButton />}
      {isAuth ? (
        <>
          <h1>My Todo List</h1>
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </>
      ) : (
        <h4>Please Login</h4>
      )}
    </div>
  );
};

export default App;
