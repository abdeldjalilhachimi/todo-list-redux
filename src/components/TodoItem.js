import React, { useState, useRef } from "react";
import { deleteTodo, updatedTodo, editedTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const textRef = useRef(false);
  const [textTitle, setTitle] = useState(title);
  const [isEdit, seIsEdit] = useState(false);
  const handelDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const handelEditText = (id) => {
    console.log(id);
    seIsEdit(true);
    // textRef.current.disabled = false;
  };
  const handelSaveText = (id, text) => {
    seIsEdit(false);
    dispatch(editedTodo({ id, title: text }));
    // textRef.current.disabled = true;
  };
  const handelCompeletTodo = (e, id) => {
    dispatch(updatedTodo({ id: id, completed: !e.target.checked }));
  };
  return (
    <li
      className={`list-group-item ${completed && "list-group-item-success"} `}
    >
      <div className="d-flex justify-content-between">
        <span
          className="d-flex align-items-center"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            className="mr-3"
            onChange={(e) => handelCompeletTodo(e, id)}
          />
          {isEdit ? (
            <textarea
              ref={textRef}
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </span>
        <div>
          {isEdit ? (
            !completed ? (
              <button
                className="btn btn-info"
                onClick={() => handelSaveText(id, textTitle)}
              >
                Save
              </button>
            ) : null
          ) : !completed ? (
            <button className="btn btn-info" onClick={() => handelEditText(id)}>
              Edit
            </button>
          ) : null}
          <button className="btn btn-danger" onClick={() => handelDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
