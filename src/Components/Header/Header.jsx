import React from 'react'
import './Header.css'
import  { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'



const Header = () => {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png" alt="NarutoLogo" />
      <NavBar/>
      <img src="https://www.icegif.com/wp-content/uploads/icegif-6854.gif" alt="" />
    </header>
  )
}

export default Header