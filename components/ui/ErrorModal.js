import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>18歳以下の閲覧を禁止します</h2>
        </header>
        {/* <div className={classes.content}>
          <p>
            以下のボタンを押すとこのブログの利用規約と免責事項とプライバシーポリシーに賛成であるということになります。
          </p>
        </div> */}

        <footer className={classes.actions}>
          <Button onClick={onClose}>了解</Button>
        </footer>
      </Card>
    </>,
    document.getElementById("portal")
  );

  // return (
  //   <>
  //     <div className={classes.backdrop}></div>
  //     <Card className={classes.modal}>
  //       <header className={classes.header}>
  //         <h2>18歳以下の閲覧を禁止します</h2>
  //       </header>
  //       {/* <div className={classes.content}>
  //     <p></p>
  //     </div> */}

  //       <footer className={classes.actions}>
  //         <Button onClick={onClose}>了解</Button>
  //       </footer>
  //     </Card>
  //   </>
  // );
};

export default Modal;
