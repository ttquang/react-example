import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import {About} from "./About";
import {PostLists} from "./PostLists";
import {Post} from "./Post";
import {Home} from "./Home";
import {Posts} from "./Posts";
import {Login} from "./Login";
import {NoMatch} from "./NoMatch";
import {Stats} from "./Stats";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../app/authSlice";

export function AppLayout() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <>
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
        {!isLogin && <Link to="/login" style={{padding: 5}}>
          Login
        </Link>}
        {isLogin && <span onClick={logOut} style={{padding: 5, cursor: 'pointer'}}> Logout </span>}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}>
          <Route index element={<PostLists/>}/>
          <Route path=":slug" element={<Post/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/stats" element={<Stats/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  );
}
