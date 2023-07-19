import {Outlet} from "react-router-dom";
import {NavBar} from "./NavBar";
import {Header} from "./Header";

export function Layout() {

  return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}