import {useAuth} from "../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export function RequireAuth({allowedRoles}) {
  const {isLogin, role} = useAuth();
  const location = useLocation();

  return (
    !isLogin
      ? <Navigate to="/login" state={{from: location}} replace/>
      : allowedRoles?.includes(role)
        ? <Outlet/>
        : <Navigate to="/unauthorized" state={{from: location}} replace/>
  )
}
