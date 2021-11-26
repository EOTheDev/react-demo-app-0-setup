import "./App.css";
import React from "react";
import FormLogin from "./form-login";
import { Header } from "./incommon/header";
import { Footer } from "./incommon/footer";
import { FormInserUser } from "./form-inser-user";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Service } from "./Api/service";
import { Feed } from "./feed";

const App: React.FC = () => {

 
  Service.isUserLogged();
  

  return (
            <>
            <Header/>
            <div className="container">
              
              <div className={"row"}>
                <h1>
                app
                </h1>
                  <Router>
                    <Switch>
                      <Route exact path="/">
                        <Redirect to="/login" />
                      </Route>
                      <Route exact path="/login">
                        <div className="col"/>
                        <FormLogin />
                        <div className="col"/>

                      </Route>
                      <Route exact path="/home">
                        <Feed/>
                      </Route>
                      <Route exact path="/register">
                        <FormInserUser />
                      </Route>
                      <Route path="*">404 not found</Route>
                    </Switch>
                  </Router>
                </div>
            </div>
            <Footer/>
            </>
    );
};

export default App;
