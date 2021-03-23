import {useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './components/page/Basic';
import Python from './components/page/Python';
import Scratch from './components/page/Scratch';
import SummerCamp from './components/page/SummerCamp';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


// import Nav from './components/Nav.js';

function App() {
  useEffect(() => {
Aos.init ({duration: 2000})
  },[])
  
 



  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/basic' component={Basic}/>
          <Route path='/python' component={Python}/>
          <Route path='/scratch' component={Scratch}/>
          <Route path='/summercamp' component={SummerCamp}/>
          
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
