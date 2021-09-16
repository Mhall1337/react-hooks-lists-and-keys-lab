import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map(element => {
    return(
      <a key={element} href={"#"+ element}>{element}</a>

      // <a href="#home">home</a>
    )
  })
  return <nav>{linkElements}</nav>;
}

export default NavBar;
