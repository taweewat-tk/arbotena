import React from "react";
import styled from "styled-components";

class Navbar extends React.Component{
    render(){
        return (
            <div className="d-flex justify-content-around">
                <TextMenu className="px-2">
                    Start
                </TextMenu>
                <TextMenu className="px-2">
                    Über arbotena
                </TextMenu>
                <TextMenu className="px-2">
                    Shop
                </TextMenu>
                <TextMenu className="px-2">
                    Blog
                </TextMenu>
                <TextMenu className="px-2">
                    Video
                </TextMenu>
                <TextMenu className="px-2">
                    FAQ
                </TextMenu>
                <VerticalLine className="mx-2" /> 
                <TextMenu className="px-2">
                    Einloggen
                </TextMenu>
                <RegisterBtn className="px-3 mx-2 py-1">
                    Registrieren
                </RegisterBtn>
            </div>
        )
    }
}

const VerticalLine = styled.div`
    margin-left: 10px;
    border: 0.5px solid #FFFFFF;
    transform: rotate(180deg);
`

const TextMenu = styled.div`
    color:#FFFFFF;
    cursor:pointer;
`

const RegisterBtn = styled.button`
    background: #bea856;
    color:#FFFFFF;
    border: 1px solid transparent;
    font-size: 13px;
    border-radius: 2px;
`

export default Navbar