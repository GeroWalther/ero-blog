import { Fragment, useState, useEffect } from "react";
import Nav from "./nav";
import Modal from "../UI/ErrorModal";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function onCloseHandler(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <Fragment>
      <Nav />
      <main>{children}</main>

      {isOpen && <Modal onClose={onCloseHandler} />}
    </Fragment>
  );
}

export default Layout;
