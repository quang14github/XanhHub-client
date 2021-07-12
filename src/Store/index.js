import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers'
import reduxThunk from 'redux-thunk'


const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(reduxThunk)
    
  )
);
export default store