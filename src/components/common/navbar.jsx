import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";

const NavBar = () => {
  return (
    <React.Fragment>
      <div>navbar</div>
      <ul>
        <li>
          <Link> Customers </Link>
        </li>
        <li>
          <Link> Movies </Link>
        </li>
        <li>
          <Link> Rentals </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default NavBar;
