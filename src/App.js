import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Services from './pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
