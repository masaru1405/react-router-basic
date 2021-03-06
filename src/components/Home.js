import React, {Component} from 'react'

class Home extends Component {

   handleSumit = (e) => {
      e.preventDefault()
      let teacherName = this.name.value
      let teacherTopic = this.topic.value
      let path = `teachers/${teacherTopic}/${teacherName}`
      this.props.history.push(path)
   }

   render(){
      return(
         <div>
            <h1>Home</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tempus quam. Etiam sed aliquam diam. Sed eu magna sit amet augue aliquam consequat nec at lorem. Aenean sollicitudin et augue sed euismod. Duis eu laoreet felis. Etiam non augue arcu. Mauris efficitur diam vel augue accumsan porta. Vivamus tristique laoreet sollicitudin. Mauris ornare ligula ut sapien suscipit sagittis pharetra sit amet metus. Etiam tincidunt velit a ex lacinia, et imperdiet arcu ultrices. Aliquam erat volutpat. Duis venenatis dictum sapien, ac tincidunt justo. Suspendisse condimentum ipsum id fringilla condimentum. In id nibh vitae elit mattis sollicitudin. Proin et urna quis ante molestie viverra. Proin sit amet ex ac nibh pellentesque pellentesque.
   
            Morbi nibh nisl, placerat ut molestie et, tristique in purus. Proin tincidunt accumsan aliquet. Suspendisse lobortis tellus eu lorem vulputate tempus. Morbi dignissim a enim at condimentum. Nullam tristique risus non imperdiet tempus. Cras tellus nisi, dictum nec iaculis vel, euismod at odio. Praesent id mauris diam. Aenean dictum tempor felis condimentum placerat. Integer quis sapien ornare, pellentesque leo nec, interdum justo. Suspendisse egestas quis leo at elementum.
            </p>
            <hr />
            <h3>Featured Teachers</h3>
            <form onSubmit={this.handleSumit}>
               <input type="text" placeholder="Name" ref={(input) => this.name = input} />
               <input type="text" placeholder="Topic" ref={(input) => this.topic = input} />
               <button type="submit">Go!</button>
            </form>
         </div>
      )
   }
   
}

export default Home