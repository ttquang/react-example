import {Outlet} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {increment} from "../app/counterSlice";

export function Posts() {

  const dispatch = useDispatch();
  dispatch(increment());

  return (
    <div style={{padding: 20}}>
      <h2>Blog</h2>
      <Outlet/>
    </div>
  );
}
