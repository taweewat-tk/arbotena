import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

class SubContentRegister extends React.Component{
    render(){
        return (
            <Row className="justify-content-center text-center content__sub">
                <Col md={6}>
                    <Title>
                        Entdecke jetzt deine Nahrungsmittelunverträglichkeiten!
                    </Title>
                    <div className="pt-4">
                        Nur 5 Minuten zu deinem individuellen Ergebnis
                    </div>
                    <BtnBlack className="py-2 mt-4">
                        Für Quick Check registrieren
                    </BtnBlack>
                </Col>
            </Row>
        )
    }
}


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
`

export default SubContentRegister
