import {useSelector} from "react-redux";

export function Home() {

  const count = useSelector(state => state.counter.value);

  return (
    <div style={{padding: 20}}>
      <h2>Home View {count}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
