
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFoundPage from './components/NotFound404/NotFound404';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/pricing"><Pricing /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="*"><NotFoundPage /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
