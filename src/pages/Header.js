import { Link } from "react-router-dom";
import "../styles/Header.css";

//add any new picture added to banners to array below
const pictures = ["banner.jpg", "banner2.jpg", "banner3.jpg"];

function chooseBanner() {
  const number = Math.floor(pictures.length * Math.random());
  return number;
}

const Header = () => {
  const picture = chooseBanner();
  return (
    <Link to="/">
      <header
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/banners/${pictures[picture]}')`,
        }}
      ></header>
    </Link>
  );
};

export default Header;
