import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Code By Kev ⓒ {year}</p>
    </footer>
  );
}

export default Footer;