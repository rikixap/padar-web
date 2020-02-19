import React from 'react';
// import './styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


import Home from './pages/Home';
import Synopsis from './pages/Synopsis';
import Streaming from './pages/Streaming';
import Merch from './pages/Merch';
import About from './pages/About';



library.add(faGhost, fas);
function App() {
  return (
    <div>
     <Router>
        <Route exact path ="/" component={Home} />
        <Route path="/synopsis" component={Synopsis}/>
        <Route path="/streaming" component={Streaming}/>
        <Route path="/merch" component={Merch}/>
        <Route path="/about" component={About}/>
     </Router>
    </div>
  );
}

export default App;
