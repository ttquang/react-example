import {useDispatch} from "react-redux";
import {increment} from "../app/counterSlice";

export function About() {

  const dispatch = useDispatch();
  dispatch(increment());

  return (
    <div style={{padding: 20}}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
