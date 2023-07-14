import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export function Login({onLogin}) {
  const [creds, setCreds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoading(true);
    // For demonstration purposes only. Never use these checks in production!
    // Use a proper authentication implementation
    setTimeout(() => {
      if (creds.username === 'admin' && creds.password === '123') {
        onLogin && onLogin({username: creds.username});
        navigate('/stats');
      }
    }, 5000);

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
