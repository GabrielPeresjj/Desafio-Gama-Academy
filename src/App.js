import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route pathname="/cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
}

export default App;