import React from "react";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { width } from "@mui/system";

function Header() {
  return (
    <header>
      <h1>Just Recipes No Stories. <MenuBookRoundedIcon style={{height:"50px", width:"50px"}}/></h1>
    </header>
  );
}

export default Header;
