import {Switch,Route} from 'react-router-dom'
import pages from 'Pages'
function App() {
  return (
    <div className="App">
      <Switch>
        {pages.map((page,i)=><Route exact={page.isExact} key={"page-"+i} path={page.link} component={page.Component}>

        </Route>)}
        <Route path="/">
      <h1>404!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
