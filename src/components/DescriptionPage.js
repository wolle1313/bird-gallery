import { useContext } from "react";

import { AppContext } from "./AppContext";

import "../styles/DescriptionPage.css";

const DescriptionPage = ({ bird, click }) => {
  const { data } = useContext(AppContext);
  const birdEl = data.find((el) => el.name === bird);
  const { name, description } = birdEl;
  return (
    <div className="descriptionCoverWrapper">
      <div className="descriptionCover">
        <div onClick={() => click("")} className="descriptionCoverExit">
          X
        </div>
        <img
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/birds/${name}/pics/1.jpg`}
        />
        <div className="descriptionDescriptions">
          <h1>{name}</h1>
          <div>
            <span>
              <h3>Podstawowe Informacje:</h3> {description.basic}
            </span>
          </div>
          <div>
            <span>
              <h3>Charakterystyka:</h3> {description.characteristics}
            </span>
          </div>
          <div>
            <span>
              <h3>Średnie wymiary:</h3> {description.measurements}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
