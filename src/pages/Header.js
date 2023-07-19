import {useAuth} from "../hooks/useAuth";

export function Header() {
  const {accessToken, role} = useAuth();

  return (
    <header>
      <h1>My Website</h1>
      <h3>Access Token : {accessToken}</h3>
      <h3>Roles : {role}</h3>
      <p>Resize the browser window to see the effect.</p>
    </header>
  );
}
