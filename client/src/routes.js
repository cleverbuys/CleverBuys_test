// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import BrandsEdit from "./pages/BrandsEdit";
import BrandsList from "./pages/BrandsList";
import DealerBrandsEdit from "./pages/DealerBrandsEdit";
import DealerBrandsList from "./pages/DealerBrandsList";
import DealershipEdit from "./pages/DealershipEdit";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/brandses/:id" component={ BrandsEdit }  />
              <PrivateRoute exact path="/brandses" component={ BrandsList }  />
              <PrivateRoute exact path="/dealerbrandses/:id" component={ DealerBrandsEdit }  />
              <PrivateRoute exact path="/dealerbrandses" component={ DealerBrandsList }  />
              <PrivateRoute exact path="/dealerships/:id" component={ DealershipEdit }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;