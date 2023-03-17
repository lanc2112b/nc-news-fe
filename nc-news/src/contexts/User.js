import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const initial = {
    username: null,
    name: null,
    avatar_url: null,
  };

  const [user, setUser] = useState(initial);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );

};
