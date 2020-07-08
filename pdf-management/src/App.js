import React from "react";

import { Switch, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import SearchForm from "./components/Search/SearchForm";
import Header from "./components/Header";
import ReportForm from "./components/ReportForm";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "4rem" }}>
        <Switch>
          <Route exact path='/' component={SearchForm} />
           {/* only report form with redux*/}
          <Route path='/form/:id' component={ReportForm} />
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
