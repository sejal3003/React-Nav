import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";


 const Navbar =()=> {
  // state = { clicked: false };
   const [click, setClick] = useState(false);
   console.log(MenuItems);
  const handleClick = (e) => {
    console.log(e);
    setClick(true);
  }
   return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><i className="fa-solid fa-camera"></i>Photography</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? "fas-fa-times" : "fas fa-bars"}></i>
          </div>

        <ul className={click ? " nav-menu active" : "nav-menu " }>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.url}>
                  <link className={item.icon}></link>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

export default Navbar;
