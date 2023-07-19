import {useAuth} from "../hooks/useAuth";

export function Header() {
  const {accessToken} = useAuth();

  return (
    <header>
      <h1>My Website {accessToken}</h1>
      <p>Resize the browser window to see the effect.</p>
    </header>
  );
}
