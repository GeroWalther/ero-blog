import { Fragment } from "react";
import Nav from "./nav";
function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
