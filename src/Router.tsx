import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./routes/";
import Portfolio from "./routes/portfolio";

function Router(){

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </BrowserRouter>

  );

}

export default Router;