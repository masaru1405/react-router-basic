import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import Teachers from './Teachers'
import Courses from './Courses'
import NotFound from './NotFound'
import Featured from './Featured'

import '../styles/app.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:name" component={Featured} />
          <Route path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
