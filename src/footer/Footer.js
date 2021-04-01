import React from "react";
import styled from "styled-components";
import DropLead from "./component/DropLead";
import FooterMenu from "./component/FooterMenu";
class Footer extends React.Component{
    render(){
        return (
            <Section>
                <DropLead />
                <FooterMenu />
            </Section>
        )
    }
}

const Section = styled.div`
    background-color: rgb(246, 246, 246);
`

export default Footer