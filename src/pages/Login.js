import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {login} from "../app/authSlice";

export function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [creds, setCreds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  function handleLogin() {
    setIsLoading(true);
    // For demonstration purposes only. Never use these checks in production!
    // Use a proper authentication implementation
    setTimeout(() => {
      if (creds.username === 'admin' && creds.password === '123') {
        dispatch(login());
        navigate(from, {replace: true})
      }
    }, 2000);

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
