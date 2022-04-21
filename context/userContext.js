import { createContext, useEffect, useState } from "react";
import userMock from "../mock/users";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(userMock);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
