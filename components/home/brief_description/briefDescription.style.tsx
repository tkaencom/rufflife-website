import styled from "styled-components";
import {device} from "../../../styles/media/media";
import { Colors, RootContainerMargin } from "../../../styles/globalstyles";


export const BriefDescriptionContainer = styled.div`
margin: ${RootContainerMargin.mobile};
padding-top: 5%;
font-family: 'Poppins', sans-serif;
display: grid;
grid-template-columns: 1fr;
justify-content: start;
margin-bottom: 10vh;
${device.mobile}{
    padding: 5vw;
}
${device.tablet}{
margin: ${RootContainerMargin.tablet};
grid-template-columns: 1fr 1fr;
}
${device.desktop}{
margin: ${RootContainerMargin.desktop};
grid-template-columns: 1fr 1fr;
}

`

export const BriefDescriptionContainerTitle = styled.div`
line-height: 3vh;
letter-spacing: 0.26em;
margin-bottom: 1vw;
`
export const BriefDescriptionContainerTitleContent = styled.div`
font-size: 2em;
line-height: 5vh;
letter-spacing: 0.1em;
font-weight: 900;
${device.tablet}{
    font-size: 1.6em;
}
${device.desktop}{
    font-size: 2em;
}
`

export const BreakLine = styled.div`
width: 10%;
height: 0.6vw;
background-color: ${Colors.SelectiveYellow};
margin-top: 1vw;
margin-bottom: 1vw;
${device.mobile}{
    width: 20%;
    height: 2vw;
}
`

export const BriefDescriptionContainerContent = styled.div`
padding-top: 2vw;
${device.tablet}{
    font-size: 0.9em;
}
${device.desktop}{
    font-size: 1.2em;
}
`