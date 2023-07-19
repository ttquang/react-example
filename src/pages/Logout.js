import {Navigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logout} from "../app/authSlice";
import {useEffect} from "react";

export function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <Navigate to="/" replace/>
  );

}
