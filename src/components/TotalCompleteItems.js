import React from "react";
import { useSelector } from "react-redux";
import compeletedTodosNumber from "../helpers";

const TotalCompleteItems = () => {
  const { todos } = useSelector((state) => state.todos);
  const filteredCompeletedTodos = compeletedTodosNumber(todos);
  return (
    <h4 className="mt-3">
      Total Complete Items:{" "}
      {filteredCompeletedTodos.length !== 0 ? (
        filteredCompeletedTodos.length
      ) : (
        <h6>There is no completed Takas so far.</h6>
      )}
    </h4>
  );
};

export default TotalCompleteItems;
