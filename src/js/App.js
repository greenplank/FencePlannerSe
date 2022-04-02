import React from "react";
import Navbar from "./Component/Navbar";
import MainSection from "./Component/MainSection";
import Main from "./Component/main";
import { Switch, Route, Redirect } from "react-router-dom"
import Information from "./pages/information";
import Help from "./pages/help";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid wrapper p-0">
          <Navbar />
          <Switch>
            <Route path="/information" component={Information}/>
            <Route path="/help" component={Help}/>
            <Route path="/" component={Main}/>
          </Switch>
          {/* <Main/> */}
          {/* <MainSection /> */}
        </div>
      </React.Fragment>
    );
  }
}
export default App;
