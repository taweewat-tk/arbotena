import React from "react";
import styled from "styled-components";
import device from "../../devices/device";

class ContentIntro extends React.Component{
    render(){
        return(
            <div>
                <ContentArea>
                    <Title>
                        Welche Nahrungsmittel verträgst du nicht?
                        Wir helfen dir dabei,
                        es rauszufinden.
                    </Title>
                    <Detail className="pt-3">
                        Erfahre hier mit dem digitalen Schnelltest, 
                        welche Lebensmittel du künftig meiden solltest und mit 
                        welchen Alternativen dein Speiseplan abwechslungsreich bleibt.
                    </Detail>
                </ContentArea>
                <div className="pt-4 d-flex">
                    <BtnBlack className="py-2">
                        Für Quick Check registrieren
                    </BtnBlack>
                    <BtnOutline className="v-center py-2 ml-3">
                        <img className="mr-2" src="icons/icons8_play.png" alt="play" width="23px" />
                        arbotena Video-Anleitung
                    </BtnOutline>
                </div>
            </div>
            
        )
    }
}

const ContentArea = styled.div`
    padding-top:10rem;
    max-width: 516px;

    @media ${device.mobile} {
        padding-top:3rem;
    }
`

const Title = styled.div`
    font-size: 48px;
    font-weight: 300;
    line-height: 56px;
    color:#FFFFFF;

    white-space: break-spaces;
    word-break: break-word;
`

const Detail = styled.div`
    font-size: 18px;
    font-weight: 300;
    color:#FFFFFF;
    line-height: 24px;
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

const BtnOutline = styled.button`
    font-size: 20px;
    font-weight: 300;
    background-color: transparent;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 3px;
    color: rgb(255, 255, 255);
    padding-left: 32px;
    padding-right: 32px;
`

export default ContentIntro
