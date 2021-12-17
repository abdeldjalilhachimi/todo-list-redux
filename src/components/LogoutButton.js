import React from "react";
import { logout } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const handelLgout = () => {
    dispatch(logout({ isAuth: false }));
  };
  return (
    <div>
      <button onClick={handelLgout} className="btn btn-primary mb-2">
        Logout
      </button>
    </div>
  );
};
