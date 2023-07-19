import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logout} from "../app/authSlice";
import {useAuth} from "../hooks/useAuth";

export function NavBar() {
  const {isLogin} = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <nav style={{margin: 10}}>
      <Link to="/" style={{padding: 5}}>
        Home
      </Link>
      <Link to="/posts" style={{padding: 5}}>
        Posts
      </Link>
      <Link to="/about" style={{padding: 5}}>
        About
      </Link>
      <span> | </span>
      {isLogin && <Link to="/stats" style={{padding: 5}}>
        Stats
      </Link>}
      {!isLogin && <Link to="/login" style={{padding: 5, float: "right"}}>
        Login
      </Link>}
      {isLogin && <Link to="/logout" style={{padding: 5, float: "right"}}>
        Logout
      </Link>}
    </nav>
  );
}
