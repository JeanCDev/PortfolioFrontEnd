import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./routes/";
import Portfolio from "./routes/portfolio";
import Project from "./routes/project";
import Contact from "./routes/contact";
import AdminLogin from "./routes/adminLogin";
import AdminPanel from "./routes/adminPanel";
import Users from "./routes/users";

function Router(){

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/project/:id" component={Project}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/admin/login" component={AdminLogin}/>
        <Route path="/admin/users" component={Users}/>
        <Route path="/admin" component={AdminPanel}/>
      </Switch>
    </BrowserRouter>

  );

}

export default Router;