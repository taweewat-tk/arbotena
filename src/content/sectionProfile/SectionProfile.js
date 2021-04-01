import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Describe from "./component/Describe";
import '../../App';
import device from "../../devices/device";

class SectionProfile extends React.Component{
    render(){
        return (
            <Section>
                <Container>
                    <Row className="v-center responsive-text-center break-word">
                        <Col lg={4} xs={12}>
                            <Img src="images/Ellipse_103.png" alt="profile" width="100%"/>
                        </Col>
                        <Col lg={8} xs={12}>
                            <Describe />
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}

const Section = styled.div`
    padding: 3rem 8rem;
    background-color: rgb(246, 246, 246);

    @media ${device.mobile} {
        padding: 3rem 1rem;
    }
`

const Img = styled.img`
    max-width: 250px;
`

export default SectionProfile