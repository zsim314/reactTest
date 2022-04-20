import React, { useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatZach">About Me</a></p>
  <p><a href="#features">Some Cool Stuff</a></p>
  <p><a href="#Contact">Contact Info</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="main__navbar">
      <div className="main__navbar-links">
        <div className="main__navbar-links_logo">

        </div>
        <div className="main__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="main__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="main__navbar-menu_container scale-up-center">
              <div className ="main__navbar-menu_container-links"> 
                <Menu />
              </div>
            </div>
          )}
      </div>
    </div>
  )
}


export default Navbar