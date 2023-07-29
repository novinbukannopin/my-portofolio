import { useState, useEffect, useRef } from "react";
import { createContext } from "react";

export const AlertContext = createContext();
export default function AlertContextProvider({ children }) {
  const [alert, setAlert] = useState("");
  const timeRef = useRef(null);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  return (
    <AlertContext.Provider value={[alert, setAlert]}>
      {children}
    </AlertContext.Provider>
  );
}
