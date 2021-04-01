import React from "react";
import styled from "styled-components";

class Logo extends React.Component{
    render(){
        return (
            <VCenter>
                <div>
                    <img src="images/Logo.png" alt="logo"/>
                    <Text>
                        ARCANUM BONI TENORIS ANIMAE
                    </Text>
                </div>
            </VCenter>
        )
    }
}

const Text = styled.div`
    font-size: 12px;
`

const VCenter = styled.div`
    display: flex;
    justify-content:center;
`
 
export default Logo