import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  AboutUs,
  Client,
  ContactUs,
  Home,
  OnlineService,
} from "../../pages/index.js";

// 작업할 때 우선 메인페이지를 aboutus로

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AboutUs} />
      <Route path="/aboutus" component={AboutUs} />
      <Route exact path="/service" component={OnlineService} />
      <Route exact path="/client" component={Client} />
      {/* 링크로 변경 <Route exact path="/blog" component={Home} /> */}
      <Route exact path="/contact" component={ContactUs} />
    </Switch>
  );
};

export default Routes;
