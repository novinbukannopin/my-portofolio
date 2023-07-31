import emailjs from "emailjs-com";
import { useRef, useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Contact() {
  const ref = useRef(null);
  const [alert, setAlert] = useContext(AlertContext);

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
    <div id="contact" className="contact">
      <h1>Send your advice</h1>
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
          type="text"
          name="name"
          id="name"
          placeholder="Who are you?"
          required
        />
        <textarea
          name="messages"
          id="messages"
          placeholder="Messages to send"
          required
        ></textarea>
        <input id="submit" type="submit" value="Send message" />
      </form>
    </div>
  );
}
