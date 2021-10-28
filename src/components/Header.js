import {NavLink} from 'react-router-dom'

const Header = () => {
   return(
      <ul>
         <li><NavLink exact to="/">HOME</NavLink></li>
         <li><NavLink to="/about">ABOUT</NavLink></li>
         <li><NavLink to="/teachers">TEACHERS</NavLink></li>
         <li><NavLink to="/courses">COURSES</NavLink></li>
      </ul>
   )
}

export default Header