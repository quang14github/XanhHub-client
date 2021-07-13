import {Switch,Route} from 'react-router-dom'
import pages from 'Pages'
function App() {
  return (
    <div className="App">
      <Switch>
        {pages.map((page,i)=><Route exact key={"page-"+i} path={page.link} component={page.Component}>

        </Route>)}
      
      </Switch>
    </div>
  );
}

export default App;
