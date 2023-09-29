import emailjs from "emailjs-com";
import React, { useEffect, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Contact = React.forwardRef((props, contactRef) => {
  const ref = useRef(null);
  const [alert, setAlert] = useState();

  useEffect(() => {
    setTimeout(() => setAlert(undefined), 3000);
  }, [alert]);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        ref.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => setAlert("success"),
        () => setAlert("error")
      )
      .finally(() => {
        e.target[0].value = "";
        e.target[1].value = "";
      });
  }

  function capitalize(s) {
    if (s !== null && s !== undefined) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }

  return (
    <div ref={contactRef} id="contact" className="contact">
      <h1 className="text-4xl font-extrabold">Suggestions Form</h1>
      {alert && (
        <Alert
          sx={{
            backgroundColor: "transparent",
            color: alert === "success" ? "#C8E4C9" : "#BF9D9E",
            width: "50%",
          }}
          variant="outlined"
          severity={alert}
        >
          <AlertTitle>{capitalize(alert)}</AlertTitle>
          {capitalize(alert)} to sent an email
        </Alert>
      )}
      <form ref={ref} method="post" onSubmit={sendEmail}>
        <input
          className="h-14 w-full"
          type="text"
          name="name"
          id="name"
          placeholder="Who are you?"
          required
        />
        <textarea
          className="h-14 w-full"
          name="messages"
          id="messages"
          placeholder="What is your advice?"
          required
        ></textarea>
        <input className="border-2 rounded-full border-cyan-200 p-3 hover:border-cyan-900 hover:cursor-pointer hover:bg-cyan-900 active:border-stone-700" id="submit" type="submit" value="Send message" />
      </form>
    </div>
  );
});
export default Contact;
