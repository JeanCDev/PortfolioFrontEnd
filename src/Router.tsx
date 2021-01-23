import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./routes/";
import Portfolio from "./routes/portfolio";
import Project from "./routes/project";
import Contact from "./routes/contact";

function Router(){

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/project/:id" component={Project}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>

  );

}

export default Router;