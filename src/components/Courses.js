import {Route, NavLink, Redirect} from 'react-router-dom'
import HTML from './courses/HTML'
import CSS from './courses/CSS'
import JS from './courses/JavaScript'

const Courses = ({match}) => {
   return(
      <div>
         <h2>Courses</h2>
         <ul>
            <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
            <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
            <li><NavLink to={`${match.url}/javascript`}>JS</NavLink></li>
         </ul>

         {/*Routes*/}
         <Route exact path={match.path} render={() => <Redirect to={`${match.path}/html`}/>} />
         <Route path={`${match.path}/html`} component={HTML} />
         <Route path={`${match.path}/css`} component={CSS} />
         <Route path={`${match.path}/javascript`} component={JS} />
      </div>

   )
}

export default Courses