import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import device from "../../../devices/device";
import '../../../App';

class SubContentMobile extends React.Component{
    render(){
        return (
            <Container>
                <Padding>
                    <HeaderText className="text-center">
                        Unsere Lösungen für dein Wohlbefinden
                    </HeaderText>
                    <Row >
                        <Col className="pt-4" lg={6} xl={6} md={12}>
                            <Card>
                                <Row >
                                    <Col className="responsive-text-center" md={4} xl={5} lg={12}>
                                        <img src="images/Mobile1.png" alt="mobile1" width="auto" />
                                    </Col>
                                    <Col className="" md={8} xl={7} lg={12}>
                                        <div className="d-flex">
                                            <div className="p-3">
                                                <Title>
                                                    Individuelle<br />
                                                    Ernährungsempfehlungen für dich
                                                </Title>
                                                <SubTitle>
                                                    arbotena Test
                                                </SubTitle>
                                                <Detail>
                                                    Spare dir teure wie zeitaufwendige Bluttests. 
                                                    In nur fünf Minuten zum Ergebnis. 
                                                    Auch Alternativen für deinen Speiseplan werden dir angezeigt.
                                                </Detail>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col className="pt-4" lg={6} xl={6} md={12}>
                            <Card>
                                <Row >
                                    <Col className="responsive-text-center" md={4} xl={5} lg={12}>
                                        <img src="images/Mobile2.png" alt="mobile2" width="auto"/>
                                    </Col>
                                    <Col className="" md={8} xl={7} lg={12}>
                                        <div className="d-flex">
                                            <div className="p-3">
                                                <Title>
                                                    Produktcheck auf Nahrungsmittelunverträglichkeiten
                                                </Title>
                                                <SubTitle>
                                                    Nahrungsmittelscanner
                                                </SubTitle>
                                                <Detail>
                                                    Dein arbotena Assistent erleichtert deine Ernährungsumstellung 
                                                    dank automatisierter Texterkennung.
                                                </Detail>
                                                <BtnOutline className="py-2 px-3 mt-2">
                                                    Beta-Version jetzt testen
                                                </BtnOutline>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Padding>
            </Container>
        )
    }
}

const Padding = styled.div`
    padding: 3rem 4rem;

    @media ${device.tablet}{
        padding: 3rem 2rem;
    }

    @media ${device.mobile}{
        padding: 3rem 1rem;
    }
`

const Card = styled.div`
    box-shadow: rgb(94 89 77 / 10%) 0px 8px 20px -2px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    white-space: break-spaces;
    word-break: break-word;
`

const HeaderText = styled.div`
    font-size: 32px;
    font-weight: 300;
    line-height: 37px;
    color: rgb(2, 2, 2);
`

const Title = styled.div`
    font-weight: 300;
    color: rgb(190, 168, 86);
    font-size: 15px;
    line-height: 24px;

    @media ${device.tablet}{
        font-size: 15px;
    }
`

const SubTitle = styled.div`
    font-size: 17px;
    font-weight: 300;
    line-height: 28px;
`

const Detail = styled.div`
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
    color: rgb(123, 123, 123);
`

const BtnOutline = styled.button`
    border: 1px solid rgb(190, 168, 86);
    border-radius: 3px;
    color: rgb(190, 168, 86);
    background-color: transparent;
    font-size: 18px;
    font-weight: 300;
`

export default SubContentMobile
