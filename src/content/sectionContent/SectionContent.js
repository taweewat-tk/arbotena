
import React from "react";
import '../../App';
import SubContentChat from "./component/SubContentChat";
import SubContentHowto from "./component/SubContentHowto";
import SubContentMain from "./component/SubContentMain";
import SubContentMobile from "./component/SubContentMobile";
import SubContentRegister from "./component/SubContentRegister";

class SectionContent extends React.Component{
    render(){
        return (
            <div>
                <SubContentMobile />
                <SubContentMain />
                <SubContentHowto />
                <SubContentChat />
                <SubContentRegister />
            </div>
        )
    }
}

export default SectionContent