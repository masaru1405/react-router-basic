import Course from './Course'
import {JSCourses} from '../../data/courses'

const JS = () => {
   let courses = JSCourses.map((course) => {
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

export default JS
