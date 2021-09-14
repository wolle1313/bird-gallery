import { NavLink } from "react-router-dom";

import "../styles/Menu.css";

const menuTabs = [
  {
    name: "Home",
    path: "/",
    exact: true,
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Descriptions",
    path: "/descriptions",
  },
  {
    name: "Links",
    path: "/links",
  },
];

const Menu = () => {
  const tabs = menuTabs.map((tab) => (
    <NavLink
      key={tab.name}
      className="menuTab"
      to={tab.path}
      exact={tab.exact ? tab.exact : false}
    >
      {tab.name}
    </NavLink>
  ));
  return <div id="menu">{tabs}</div>;
};

export default Menu;
