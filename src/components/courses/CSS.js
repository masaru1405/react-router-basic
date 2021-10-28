import Course from './Course'
import {CSSCourses} from '../../data/courses'

const CSS = () => {
   let courses = CSSCourses.map((course) => {
      return <Course 
                  title={course.title}
                  description={course.description}
                  key={course.id}
            />
   })
   return(
      <div>
         <ul>
            {courses}
         </ul>
      </div>
   )
}

export default CSS
