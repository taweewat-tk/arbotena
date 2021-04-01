import React from "react";
import styled from "styled-components";

class Describe extends React.Component{
    render(){
        return (
            <div>
                <Title>
                    Gesundheit ganzheitlich betrachten
                </Title>
                <SubTitle>
                    Dr. med. Hans-Joachim Petersohn
                </SubTitle>
                <Detail className="pt-3">
                    Wir haben Dr. med. Hans-Joachim Petersohn für euch interviewt. 
                    Er ist Leiter des Gesundheitsinstitus „<DetailLink>Salutomed</DetailLink>“ und verfolgt den 
                    Ansatz einer ganzheitlichen Therapie: Statt nur Symptome zu behandeln, 
                    möchte er die Ursachen von gesundheitlichen Beschwerden ergründen. 
                    Die Ernährung spielt hier oft eine entscheidene Rolle. Ergänzend hat 
                    Dr. med. Petersohn <DetailLink>Vitalstoffpräparate</DetailLink> entwickelt, 
                    die der Körper nicht immer im ausreichenden Maße über die Ernährung aufnimmt. 
                    <DetailLink>Welche das sind, lest ihr im Interview</DetailLink>
                </Detail>
            </div>
        )
    }
}

const Title = styled.div`
    font-size: 40px;
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

export default Describe