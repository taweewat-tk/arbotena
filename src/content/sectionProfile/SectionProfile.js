import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Describe from "./component/Describe";
import ProfilePic from "./component/ProfilePic";

class SectionProfile extends React.Component{
    render(){
        return (
            <Section>
                <Container>
                        <Row className="v-center">
                            <Col md={5}>
                                <ProfilePic />
                            </Col>
                            <Col md={7}>
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
`

export default SectionProfile