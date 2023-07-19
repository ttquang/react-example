import {Navigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logout} from "../app/authSlice";

export function Logout() {
  const dispatch = useDispatch();

  dispatch(logout());

  return (
    <Navigate to="/" replace/>
  );

}
