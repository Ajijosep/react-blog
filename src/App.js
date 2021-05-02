import Navbarcomp from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";
import PNotFound from "./PNotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbarcomp />
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <PNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
