import {Route, NavLink} from 'react-router-dom'
import HTML from './courses/HTML'
import CSS from './courses/CSS'
import JS from './courses/JavaScript'

const Courses = () => {
   return(
      <div>
         <h2>Courses</h2>
         <ul>
            <li><NavLink to='/courses/HTML'>HTML</NavLink></li>
            <li><NavLink to='/courses/css'>CSS</NavLink></li>
            <li><NavLink to='/courses/javascript'>JS</NavLink></li>
         </ul>

         <Route path="/courses/HTML" component={HTML} />
         <Route path="/courses/css" component={CSS} />
         <Route path="/courses/javascript" component={JS} />
      </div>

   )
}

export default Courses