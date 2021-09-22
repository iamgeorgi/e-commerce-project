import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* in the moment when Route finds a match in url, it renders exactly that component */}
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
