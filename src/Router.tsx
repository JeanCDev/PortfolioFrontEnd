import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import AdminLogin from "./routes/AdminLogin";
import AdminPanel from "./routes/AdminPanel";
import Users from "./routes/Users";
import UserUpdate from "./routes/UserUpdate";

function Router(){

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/project/:id" component={Project}/>
        <Route path="/contact" component={Contact}/>

        <Route path="/admin/login" component={AdminLogin}/>
        <Route path="/admin/users/:id" component={UserUpdate}/>
        <Route path="/admin/users" component={Users}/>
        <Route path="/admin" component={AdminPanel}/>
      </Switch>
    </BrowserRouter>

  );

}

export default Router;