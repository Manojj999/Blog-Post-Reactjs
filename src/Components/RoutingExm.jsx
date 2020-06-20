import React from "react";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";

const RouterExample = () => {
  return (
    <div>
      {/* <Router> accept only single child */}
      <Router>
        <div>
          <ul>
            <li>
           
              <Link to="/"> Home</Link>
            </li>
            <li>
             
              <Link to="/About"> About</Link>
            </li>
            <li>
             
             <Link to={{pathname: '/Service'}}> Service</Link>
           </li>
          </ul>
          <hr />
          {/* <Switch> => it used when component locations are same at that time it automaticall choose first location */}
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Service" component={Service} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Example of Home page</p>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Example of About page</p>
    </div>
  );
};

const Service = () => {
    return (
      <div>
        <h1>Service</h1>
        <p>Example of Service page</p>
      </div>
    );
  };
export default RouterExample;
