import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import {Posts} from "./pages/Posts";
import {PostLists} from "./pages/PostLists";
import {Post} from "./pages/Post";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Stats} from "./pages/Stats";
import {NoMatch} from "./pages/NoMatch";
import {RequireAuth} from "./pages/RequireAuth";
import {Unauthorized} from "./pages/Unauthorized";

const ROLES = {
  'User':2001
}

function App() {
  return (
    <Routes>
      <Route path="/" element={(<Layout/>)}>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}>
          <Route index element={<PostLists/>}/>
          <Route path=":slug" element={<Post/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>
          <Route path="/stats" element={<Stats/>}/>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  );
}

export default App;
