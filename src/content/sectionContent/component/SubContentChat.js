import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import '../../../App';

class SubContentChat extends React.Component{
    render(){
        return (
            <div>
                <Quote className="text-center">
                    <img src="icons/icons8_quote.png" alt="talk" width="80px"/>
                </Quote>
                <Row className="justify-content-center">
                    <Col md={6} xs={10}>
                        <Detail>
                            Eine rein symptomorientierte Behandlung ist out! 
                            Vielmehr versuchen wir mit dem Patienten gemeinsam 
                            die Ursache seiner Beschwerden zu finden und erstellen 
                            ein individuelles, präventives Gesundheitskonzept, 
                            damit er mit hoher Lebensqualität gesund alt werden kann.
                            <Row className="pt-4 v-center">
                                <Col xs={3} className="d-flex justify-content-center">
                                    <Img src="images/Ellipse_103.png" alt="profile" width="100%" />
                                </Col>
                                <Col xs={9} className="pl-3">
                                    <Title>
                                        Dr. med. Hans-Joachim Petersohn
                                    </Title>
                                    <SubTitle>
                                        Der Leiter des Gesundheitsinstitus „Salutomed“
                                    </SubTitle>
                                </Col>
                            </Row>
                        </Detail>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Img = styled.img`
    max-width: 100px;
`

const Quote = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`

const Detail = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: rgb(28, 30, 33);
`

const Title = styled.div`
    font-weight: 500;
`

const SubTitle = styled.div`
    color: rgb(123, 123, 123);
    font-weight: 400;
`

export default SubContentChat
