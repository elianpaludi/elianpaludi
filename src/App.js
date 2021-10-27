import './styles/main.css'
import PantallaBloqueada from './components/PantallaBloqueda.jsx'
import Windows from './components/Windows.jsx'

import {
  Switch,
  Route,
  BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={PantallaBloqueada}/>
      </Switch>
      <Switch>
        <Route exact path="/windows" component={Windows}/>
      </Switch>
    </Router>
    </div> 
  );
}

export default App;
