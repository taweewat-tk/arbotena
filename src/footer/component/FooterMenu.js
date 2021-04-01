import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

class FooterMenu extends React.Component{
    render(){
        return (
            <Container>
                <div className="d-flex justify-content-between py-4">
                    <TextMenu className="d-flex">
                        <div className="px-2">
                            Impressum
                        </div>
                        <div className="px-2">
                            Datenschutz
                        </div>
                        <div className="px-2">
                            Konformitätserklärung
                        </div>
                        <div className="px-2">
                            Feedback
                        </div>
                        <div className="px-2">
                            Kontakt
                        </div>
                    </TextMenu>
                    <div className="d-flex">
                        <Reserved>
                            © 2021 Arbotena GmbH. All Rights Reserved.
                        </Reserved>
                        <div className="d-flex pl-3">
                            <div className="px-2">
                                <img src="icons/icons8_facebook.png" alt="facebook" width="19px" />
                            </div>
                            <div className="px-2">
                                <img src="icons/icons8_instagram.png" alt="facebook" width="19px" />
                            </div>
                            <div className="px-2">
                                <img src="icons/icons8_youtube.png" alt="facebook" width="19px" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

const TextMenu = styled.div`
    color: rgb(111, 111, 111);
    cursor:pointer;
    font-size: 16px;
    font-weight: 400;
`

const Reserved = styled.div`
    font-size: 14px;
    font-weight: 300;
    color: rgb(172, 172, 172);
`

export default FooterMenu
