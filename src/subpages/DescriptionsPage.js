import { useContext, useState } from "react";
import { AppContext } from "../components/AppContext";

import DescriptionPage from "../components/DescriptionPage";

import "../styles/DescriptionsPage.css";

const DescriptionsPage = () => {
  const [currentDesc, setCurrentDesc] = useState("");

  const { data } = useContext(AppContext);
  let loadedPics = [];
  if (data) {
    const onlyDescriptions = data.filter((el) =>
      el.description ? true : false
    );
    loadedPics = onlyDescriptions.map((element) => {
      const { name } = element;
      return (
        <div
          key={name}
          onClick={() => setCurrentDesc(name)}
          className="descriptionBird"
        >
          <img
            alt={name}
            src={`${process.env.PUBLIC_URL}/images/birds/${name}/pics/1.jpg`}
          />
          <span>{name}</span>
        </div>
      );
    });
  }
  return (
    <div className="descriptionWrapper">
      <h1>Descriptions</h1>
      <div className="description">{loadedPics}</div>
      {currentDesc && (
        <DescriptionPage click={setCurrentDesc} bird={currentDesc} />
      )}
    </div>
  );
};

export default DescriptionsPage;
