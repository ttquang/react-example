import {Link} from 'react-router-dom';
import {useAuth} from "../hooks/useAuth";
import {useEffect, useState} from "react";
import axios from "axios";

export function NavBar() {
  const {isLogin, role} = useAuth();

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (role) {
      axios.get("http://localhost:8080/api/roles/" + role + "/menu")
        .then((response) => {
          setMenus(response.data);
        });
    } else {
      setMenus([]);
    }
  }, [role]);

  return (
    <nav>
      {menus.map((menu, index) => (
        <Link key={index} to={menu.url}>{menu.label}</Link>
      ))}

      {!isLogin && <Link to="/login" style={{float: "right"}}>
        Login
      </Link>}
      {isLogin && <Link to="/logout" style={{float: "right"}}>
        Logout
      </Link>}
    </nav>
  );
}
