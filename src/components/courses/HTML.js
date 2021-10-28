import Course from './Course'
import {HTMLCourses} from '../../data/courses'

const HTML = () => {
   let courses = HTMLCourses.map((course) => {
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

export default HTML