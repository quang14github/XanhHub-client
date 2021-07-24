import React from "react";
import { Switch, Route } from "react-router-dom";
import pages from "Pages";
import { JwtContext } from "Hooks/Context";
import { useRestore } from "Hooks/useSession";
function App() {
  const [jwt, setJWT] = React.useState("");

  return (
    <div className="App">
      <JwtContext.Provider value={{ jwt, setJWT }}>
        <Main />
      </JwtContext.Provider>
    </div>
  );
}
const Main = () => {
  const isLoad=useRestore();
  return isLoad&&(
    <Switch>
      {pages.map((page, i) => (
        <Route
          exact={page.isExact}
          key={"page-" + i}
          path={page.link}
          component={page.Component}
        ></Route>
      ))}
      <Route path="/">
        <h1>404!</h1>
      </Route>
    </Switch>
  );
};
export default App;
