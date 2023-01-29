import React, { useRef, useState, useEffect } from "react";
import classes from "./subscribe.module.css";
import Button from "../ui/Button";
import Notification from "../ui/notification";

function Subscribe() {
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  const inputElRep = useRef(null);
  const inputFName = useRef(null);
  const inputLName = useRef(null);

  const emailIsTheSame = (email, repeatEmail) => {
    if (email !== repeatEmail) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const emailIsValid = emailIsTheSame(
      inputEl.current.value,
      inputElRep.current.value
    );
    setRequestStatus("pending");
    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
        fName: inputFName.current.value,
        lName: inputLName.current.value,
        emailIsValid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
      setRequestStatus("error");
      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    inputElRep.current.value = "";
    inputFName.current.value = "";
    inputLName.current.value = "";
    setRequestStatus("success");
    setMessage("成功でした！登録しました。");
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "登録中...",
      message: "登録中...",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "成功でした！",
      message: "成功でした！登録しました！！🎉",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "エラー！",
      message: requestError,
    };
  }

  return (
    <section>
      <form onSubmit={subscribe} className={classes.bg}>
        <div className={classes.bgpic}>
          <div className={classes.form}>
            <h3 className={classes.h3}>ニュースレター</h3>
            <p className={classes.p}>
              新しい艶っぽさを読みそびれないように登録して投稿し次第、またはブログの内容を更新したら、メールでお知らせいたします。
            </p>
            <div className={classes.group}>
              <input
                className={classes.input}
                id="email-input"
                name="email"
                placeholder="メール"
                ref={inputEl}
                required
                type="email"
              />
              <label htmlFor="email-input" className={classes.label}>
                {"メール"}
              </label>
            </div>

            <div className={classes.group}>
              <input
                className={classes.input}
                id="email-repeat"
                name="email-rp"
                placeholder="メールを繰り返してください"
                ref={inputElRep}
                required
                type="email"
              />
              <label htmlFor="email-repeat" className={classes.label}>
                {"メールを繰り返してください"}
              </label>
            </div>

            <div className={classes.group}>
              <input
                className={classes.input}
                id="fName-input"
                name="name"
                placeholder="お名前"
                ref={inputFName}
                required
                type="text"
              />
              <label htmlFor="fName-input" className={classes.label}>
                {"お名前"}
              </label>
            </div>
            <div className={classes.group}>
              <input
                className={classes.input}
                id="lName-input"
                name="lastName"
                placeholder="苗字"
                ref={inputLName}
                required
                type="text"
              />
              <label htmlFor="lName-input" className={classes.label}>
                {"苗字"}
              </label>
            </div>

            <div className={classes.message}>
              {message
                ? message
                : `ブログを更新する時だけにメールを送りします。スパムではないです。`}
            </div>
            <Button type="submit" style={classes.btn}>
              {"登録"}
            </Button>
          </div>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default Subscribe;
