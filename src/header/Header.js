import React from "react";
import Logo from './component/Logo';
import '../App';
import Navbar from "./component/Navbar";

class Header extends React.Component{

    render(){
        return (
            <div className="justify-content-between pt-4 v-center">
                <Logo />
                <Navbar />
            </div>
        )
    }
}

export default Header