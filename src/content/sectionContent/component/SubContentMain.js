import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

class SubContentMain extends React.Component{
    render(){
        return (
            <div className="d-flex justify-content-between">
                <Padding>
                    <Title>
                        Habe ich eine Nahrungsmittelunverträglichkeit?
                    </Title>
                    <SubTitle className="pt-1">
                        Was kann ich dagegen tun?
                    </SubTitle>
                    <Detail className="pt-3">
                        Magen-Darm-Beschwerden, Kopfschmerzen, Hautprobleme? 
                        Dahinter kann die Ernährung – und eine 
                        <DetailLink>Nahrungsmittelunverträglichkeit</DetailLink> – stecken. 
                        Mit <DetailLink>arbotena, dem digitalen Schnell-Test</DetailLink>, 
                        kannst du prüfen, ob das vielleicht auch 
                        bei dir der Fall ist. Der arbotena-Test analysiert 
                        datenbasiert Symptome von Menschen und kann dadurch 
                        Rückschlüsse auf Unverträglichkeiten von 
                        Nahrungsmitteln ziehen. Das Ganze funktioniert 
                        mithilfe eines digitalen Anamnesebogens. 
                        Innerhalb von wenigen Minuten erhältst du dein 
                        persönliches Ergebnis.
                    </Detail>
                </Padding>
                <img src="images/Pic_Arbotena.png" alt="arbotena"/>
            </div>
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

const SubTitle = styled.div`
    font-size: 32px;
    font-weight: 300;
    color: rgb(28, 30, 33);
`

const Detail = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: rgb(28, 30, 33);
`

const DetailLink = styled.span`
    text-decoration: underline;
    color: rgb(190, 168, 86) !important;
`

export default SubContentMain