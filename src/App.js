
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

import PastLaunches from "./composition/PastLaunches";
import FutureLaunches from "./composition/FutureLaunches";
import Rockets from "./composition/Rockets";

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>

        {/*  MENU  */}
        <div className="w-3/4 mx-auto mt-12">
          <Link to="/" className='text-2xl font-bold text-gray-600 bg-gray-100 py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-200 mr-2'>
              Upcoming Launches
          </Link>
          <Link to="/past_launches" className='text-2xl font-bold text-gray-600 bg-gray-100 py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-200 mr-2'>
              Past Launches
          </Link>
          <Link to="/rockets" className='text-2xl font-bold text-gray-600 bg-gray-100 py-2 px-2 rounded-lg cursor-pointer hover:bg-gray-200'>
              Rockets
          </Link>
        </div>


        {/*  ROUTES  */}
        <Switch>
          <Route exact path="/">
            <FutureLaunches />
          </Route>

          <Route exact path="/past_launches">
            <PastLaunches />
          </Route>

          <Route exact path="/rockets">
            <Rockets />
          </Route>
        </Switch>

      </Router>
    </ApolloProvider>
  );
}

export default App;
