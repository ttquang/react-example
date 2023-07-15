import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../app/counterSlice";

export function Stats() {

  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  dispatch(increment());

  if (!isLogin) {
    return (
      <Navigate to="/login" replace/>
    );
  }

  return (
    <div style={{padding: 20}}>
      <h2>Stats View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
