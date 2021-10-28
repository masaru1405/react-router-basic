import Course from './Course'

const CourseContainer = (props) => {
   let courses = props.data.map((course) => {
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

export default CourseContainer