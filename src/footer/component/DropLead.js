import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

class DropLead extends React.Component{
    render(){
        return (
            <Section>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="d-flex justify-content-center pb-4">
                            <img src="images/Logo.png" alt="logo"/>
                        </div>
                        <Title className="pt-4 pb-2 text-center">
                            Abonniere unseren Newsletter
                            für wöchentliche Gesundheitstipps
                        </Title>
                        <div className="d-flex justify-content-center pt-4">
                            <Input placeholder="Deine E-Mail-Adresse" type="text"/>
                            <BtnBlack className="py-2 ml-4">
                                ABONNIEREN
                            </BtnBlack>
                        </div>
                    </Col>
                </Row>
            </Section>
        )
    }
}

const Section = styled.div`
    padding: 3rem 0rem;
`

const Input = styled.input`
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    background: rgb(246, 246, 246);
    color: rgb(28, 30, 33);
    caret-color: rgb(190, 168, 86);
    border-image: linear-gradient(to right, rgb(203, 178, 84) 0%, rgb(216, 196, 112) 56.52%, rgb(201, 176, 78) 77.1%, rgb(250, 244, 197) 100%) 1 / 1 / 0 stretch;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    width: 100%;
`

const Title = styled.div`
    font-size: 33px;
    font-weight: 300;
    line-height: 47px;
    color: rgb(28, 30, 33);
`

const BtnBlack = styled.button`
    background: rgb(28, 30, 33);
    border: none;
    color: rgb(190, 168, 86);
    font-size: 20px;
    font-weight: 400;
    outline: none;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 2px;
`

export default DropLead