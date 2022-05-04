import Router from "./config/router";
import {Provider} from 'react-redux'
import {store} from './redux/index'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
