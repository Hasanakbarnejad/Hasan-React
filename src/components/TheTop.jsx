import * as React from "react";
import { NavLink } from "react-router-dom";
export default function TheTop() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    color: "#fff"
  };
 
  return (
    <header>
      <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}