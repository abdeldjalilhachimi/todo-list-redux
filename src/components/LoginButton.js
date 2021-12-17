import React from "react";
import { login } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

export const LoginButton = () => {
  const dispatch = useDispatch();
  const handelLogin = () => {
    dispatch(login({ isAuth: true }));
  };
  return (
    <div>
      <button onClick={handelLogin} className="btn btn-primary mb-2">
        Login
      </button>
    </div>
  );
};
