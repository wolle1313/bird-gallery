import { Switch, Route, useHistory } from "react-router";

import HomePage from "../subpages/HomePage";
import GalleryPage from "../subpages/GalleryPage";
import LinksPage from "../subpages/LinksPage";
import DescriptionsPage from "../subpages/DescriptionsPage";
import ErrorPage from "../subpages/ErrorPage";
import GalleryBird from "../components/GalleryBird";

const Main = () => {
  const history = useHistory();
  return (
    <>
      <div onClick={history.goBack} className="goBack">
        <i className="fas fa-arrow-circle-left"></i>
      </div>
      <div onClick={history.goForward} className="goForward">
        <i className="fas fa-arrow-circle-right"></i>
      </div>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/gallery/:name" exact component={GalleryBird}></Route>
        <Route path="/gallery" exact component={GalleryPage}></Route>
        <Route path="/descriptions" exact component={DescriptionsPage}></Route>
        <Route path="/links" exact component={LinksPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Main;
