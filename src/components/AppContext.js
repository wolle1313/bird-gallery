import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState("");
  const fetchData = () => {
    fetch(process.env.PUBLIC_URL + "/pictures.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => alert(`Błąd: ${err}`));
  };
  return (
    <AppContext.Provider value={{ data, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
