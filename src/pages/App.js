import { BrowserRouter as Router } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AppContext } from "../components/AppContext";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

import "../styles/App.css";

function App() {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Menu />
        <main>
          <Main />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
