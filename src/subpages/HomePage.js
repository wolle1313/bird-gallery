import { useContext } from "react";
import { SRLWrapper } from "simple-react-lightbox";

import { AppContext } from "../components/AppContext";

import "../styles/HomePage.css";

const HomePage = () => {
  const { data } = useContext(AppContext);

  let picturesNames = [];
  if (data.length) {
    for (let i = 0; i < 4; i++) {
      picturesNames.push(data[i].name);
    }
  }

  const loadedPics = picturesNames.map((name) => {
    return (
      <div key={name} className="homeBird">
        <img
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/birds/${name}/pics/1.jpg`}
        />
        <span>{name}</span>
      </div>
    );
  });

  return (
    <div id="home">
      <div>
        <h1>Recent photos</h1>
      </div>
      <SRLWrapper>
        <div id="homeWrapper">{loadedPics}</div>
      </SRLWrapper>
    </div>
  );
};
export default HomePage;
