import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

class SubContentHowto extends React.Component{
    render(){
        return (
            <Padding>
                <Row>
                    <Col>
                        <img src="images/HowtoMobile.png" alt="HowtoMobile"/>
                    </Col>
                    <Col>
                        <Title>
                            Der arbotena Test - so funktioniert’s
                        </Title>
                        <div className="v-baseline pt-4">
                            <Order className="d-flex justify-content-center">
                                <OrderNo>
                                    1
                                </OrderNo>
                            </Order>
                            <OrderText className="pl-3">
                                Registriere dich auf arbotena.de
                            </OrderText>
                        </div>
                        <div className="v-baseline pt-4">
                            <Order className="d-flex justify-content-center">
                                <OrderNo>
                                    2
                                </OrderNo>
                            </Order>
                            <OrderText className="pl-3">
                                Logge dich ein
                            </OrderText>
                        </div>
                        <div className="v-baseline pt-4">
                            <Order className="d-flex justify-content-center">
                                <OrderNo>
                                    3
                                </OrderNo>
                            </Order>
                            <OrderText className="pl-3">
                                Starte jetzt deinen arbotena Test
                            </OrderText>
                        </div>
                        <div className="v-baseline pt-4">
                            <Order className="d-flex justify-content-center">
                                <OrderNo>
                                    4
                                </OrderNo>
                            </Order>
                            <OrderText className="pl-3">
                                Bezahle einmalig 49,99€ inkl. MwSt über PayPal, 
                                Sofortüberweisung oder Kreditkarte
                            </OrderText>
                        </div>
                        <div className="v-baseline pt-4">
                            <Order className="d-flex justify-content-center">
                                <OrderNo>
                                    5
                                </OrderNo>
                            </Order>
                            <OrderText className="pl-3">
                                Erhalte deine persönliche Auswertung
                            </OrderText>
                        </div>
                        <div className="pt-4">
                            <img className="mr-2" src="icons/icons8_play_color.png" alt="play" width="20px" />
                            arbotena Test Schritt-für-Schritt
                        </div>
                    </Col>
                </Row>
            </Padding>
        )
    }
}

const Padding = styled.div`
    padding: 3rem 9rem;
`

const Title = styled.div`
    font-size: 33px;
    font-weight: 300;
    line-height: 47px;
    color: rgb(28, 30, 33);
`

const Order = styled.div`
    background: rgb(255, 255, 255);
    box-shadow: rgb(94 89 77 / 10%) 0px 5px 20px -2px;
    border-radius: 25px;
    min-width: 48px;
    min-height: 48px;
`

const OrderNo = styled.span`
    font-size: 32px;
    font-weight: 300;
    color: rgb(190, 168, 86);
    font-style: italic;
`

const OrderText = styled.span`
    font-size: 24px;
    font-weight: 300;
    color: rgb(2, 2, 2);
`

export default SubContentHowto