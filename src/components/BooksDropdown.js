import React, { useState } from "react";
import { Link } from "react-router-dom";
import { booksDropdown } from "./Navitems";
import "./Dropdown.css";

function TwelveDropdown() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={Dropdown ? "books-submenu clicked" : "books-submenu"}
        onClick={() => setDropdown(!Dropdown)}
      >
        {booksDropdown.map((item) => {
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

export default TwelveDropdown;
