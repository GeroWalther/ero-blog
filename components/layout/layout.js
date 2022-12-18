import { useState, useEffect } from "react";
import Nav from "./nav";
import Modal from "../ui/ErrorModal";
import Footer from "./footer";

import classes from "./layout.module.css";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  function onCloseHandler(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <div className={classes.container}>
      <Nav />
      <main>{children}</main>

      {isOpen && <Modal onClose={onCloseHandler} />}
      <Footer />
    </div>
  );
}

export default Layout;
