const Featured = ({match}) => {
   let name = `${match.params.fname} ${match.params.lname}`
   let topic = match.params.topic
   return(
      <div>
         <h2>{name}</h2>
         <p>
            Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!
         </p>
      </div>
   )
}

export default Featured