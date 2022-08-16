import React, {useState} from "react";
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';
import Mainpage from "./components/mainpage";

function Main() {
    const [navbar, setNavbar] = useState(true);
    const changeheight = () => {
      if(window.scrollY > 0){
        setNavbar(false);
      }else{
        setNavbar(true);
      }
    }
    console.log(changeheight);
    return (
        <div>
            { navbar ? <Header /> : <HeaderFixed /> }
            <Mainpage/>
        </div>
    );
  }
  
  export default Main;