import React from "react";
import { Link } from "react-router-dom";

// the Header takes a child component as a prop
// the component is placed in between the tags wherever the header component is used
const Header = props => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30
  };
  return (
    // header is made a higher order component
    // other component are rendered under it as children
    <div>
      <div>
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>
        <h3 style={style}>
          <Link to="/jokes">Jokes</Link>
        </h3>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
