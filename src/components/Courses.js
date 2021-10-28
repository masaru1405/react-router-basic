import {Route, NavLink, Redirect, Switch} from 'react-router-dom'
import CourseContainer from './courses/CourseContainer'
import {HTMLCourses, CSSCourses, JSCourses} from '../data/courses'
import NotFound from './NotFound'

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
         <Switch>
            <Route exact path={match.path} render={() => <Redirect to={`${match.path}/html`}/>} />
            <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses} />} />
            <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses} />} />
            <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses} />} />
            <Route component={NotFound} />
         </Switch>
      </div>

   )
}

export default Courses