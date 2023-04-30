import React from 'react' 
import logo from '../assets/logo.svg'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Header