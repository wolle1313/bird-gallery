import { useContext } from "react";
import { SRLWrapper } from "simple-react-lightbox";

import { AppContext } from "./AppContext";

import "../styles/GalleryBird.css";

const GalleryBird = ({ match }) => {
  const { data } = useContext(AppContext);
  const pictures = [];
  if (data) {
    // eslint-disable-next-line eqeqeq
    const bird = data.find((el) => el.name == [match.params.name]);
    if (bird) {
      for (let i = 0; i < bird.noPictures; i++) {
        const el = (
          <div key={bird.name} className="homeBird">
            <img
              alt={bird.name}
              src={`${process.env.PUBLIC_URL}/images/birds/${bird.name}/pics/${
                i + 1
              }.jpg`}
            />
          </div>
        );
        pictures.push(el);
      }
    }
  }
  return (
    <div className="gallerySingleWrapper">
      <h1>{match.params.name}</h1>
      <SRLWrapper>
        <div className="gallerySingle">{pictures}</div>
      </SRLWrapper>
    </div>
  );
};

export default GalleryBird;
