import React, { useState } from "react";
import { Link } from "react-router-dom";
import { elevenDropdown } from "../components/Navitems";
import "./Dropdown.css";

function ElevenDropdown() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={Dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!Dropdown)}
      >
        {elevenDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ElevenDropdown;
