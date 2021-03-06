import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./routes/UserRoutes/Home";
import Portfolio from "./routes/UserRoutes/Portfolio";
import Project from "./routes/UserRoutes/Project";
import Contact from "./routes/UserRoutes/Contact";
import AdminLogin from "./routes/AdminRoutes/AdminLogin";
import AdminPanel from "./routes/AdminRoutes/AdminPanel";
import Users from "./routes/AdminRoutes/Users";
import UserUpdate from "./routes/AdminRoutes/UserUpdate";
import Projects from "./routes/AdminRoutes/Projects";
import ProjectUpdate from "./routes/AdminRoutes/ProjectUpdate";
import Messages from "./routes/AdminRoutes/Messages";

function Router(){

  return (

    <BrowserRouter>
      <Switch>
        {/* User Routes */}
        <Route path="/" exact component={Index}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/project/:id" component={Project}/>
        <Route path="/contact" component={Contact}/>

        {/* Admin Routes */}
        <Route path="/admin/login" component={AdminLogin}/>
        <Route path="/admin/projects/:id" component={ProjectUpdate}/>
        <Route path="/admin/projects" component={Projects}/>
        <Route path="/admin/users/:id" component={UserUpdate}/>
        <Route path="/admin/users" component={Users}/>
        <Route path="/admin/messages" component={Messages}/>
        <Route path="/admin" component={AdminPanel}/>
      </Switch>
    </BrowserRouter>

  );

}

export default Router;