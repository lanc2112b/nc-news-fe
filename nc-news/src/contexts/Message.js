import { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const initial = {
    showMsg: null,
    title: null,
    msg: null,
  };

  const [message, setMessage] = useState(initial);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
