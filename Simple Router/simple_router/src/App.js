import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';


const App= ()=>(
 <Router>
   <div>
     <Route exact path="/" component={Home} />
     <Route path='/about' component={About}/>
     <Route path ="/contact" component= {Contact} />
     <Route 
     path ="/contact" 
     children={({match})=>match && <h2>Contact</h2>} />
   </div>
 </Router>
)

export default App
