import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {login} from "../app/authSlice";
import axios from "axios";

export function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [creds, setCreds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  async function handleLogin() {
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:8080/login");
      dispatch(login(response?.data))
      navigate(from, {replace: true})
    } catch (err) {

    }

  }

  if (isLoading) {
    return (
      <div style={{padding: 10}}><span>Login.....</span></div>
    );
  } else {
    return (
      <div style={{padding: 10}}>
        <br/>
        <span>Username:</span><br/>
        <input
          type="text"
          onChange={(e) => setCreds({...creds, username: e.target.value})}/><br/>
        <span>Password:</span><br/>
        <input
          type="password"
          onChange={(e) => setCreds({...creds, password: e.target.value})}/><br/><br/>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

}
