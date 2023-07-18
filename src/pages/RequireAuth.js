import {useAuth} from "../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export function RequireAuth({allowedRoles}) {
  const {isLogin, roles} = useAuth();
  const location = useLocation();

  return (
    roles?.find(role => allowedRoles?.includes(role))
      ? <Outlet/>
      : isLogin
        ? <Navigate to="/unauthorized" state={{from: location}} replace/>
        : <Navigate to="/login" state={{from: location}} replace/>
  )
}
