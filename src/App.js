import React from 'react'
import {Switch,Route} from 'react-router-dom'
import pages from 'Pages'
import {JwtContext} from 'Hooks/Context'

function App() {
  const [jwt,setJWT]=React.useState('')
  return (
    <div className="App">
      <JwtContext.Provider value={{jwt,setJWT}}>
      <Switch>
        {pages.map((page,i)=><Route exact={page.isExact} key={"page-"+i} path={page.link} component={page.Component}>

        </Route>)}
        <Route path="/">
      <h1>404!</h1>
        </Route>
      </Switch>
      </JwtContext.Provider>
    </div>
  );
}

export default App;
