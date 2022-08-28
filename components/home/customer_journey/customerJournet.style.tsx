import styled from "styled-components";
import {device} from "../../../styles/media/media";
import { Colors, RootContainerMargin } from "../../../styles/globalstyles";


export const CustomerJourneyContainer = styled.div`

margin: ${RootContainerMargin.mobile};
padding-top: 5%;


${device.tablet}{
margin: ${RootContainerMargin.tablet};
}

${device.desktop}{

margin: ${RootContainerMargin.desktop};
}
`

export const CustomerJourneyTitleContainer = styled.div`
display: flex;
justify-content: center;
justify-items: center;
letter-spacing: 0.26em;
line-height: 3vh;
`

export const CustomerJourneycontentContainer = styled.div`
padding-top: 1%;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
text-align: center;
font-size: 3.2vw;
display: flex;
justify-content: center;
justify-items: center;
margin-bottom: 4vh;
${device.tablet}{
    font-size: 2.6vw;
}

${device.desktop}{
    font-size: 1.6vw;
}
`

export const BreakLine = styled.div`
display: grid;
justify-content:center;
justify-items: center;
width: 20%;
margin-left: 40%;
margin-right: 40%;
height: 2vw;
background-color: ${Colors.SelectiveYellow};
margin-bottom: 2vh;
${device.tablet}{
width: 10%;
margin-left: 45%;
margin-right: 45%;
height: 0.6vw;
margin-bottom: 5vh;
}

${device.desktop}{
width: 10%;
margin-left: 45%;
margin-right: 45%;
height: 0.6vw;
margin-bottom: 5vh;
}
`

export const CustomerJourneySection = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-content: center;
${device.tablet}{
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: 10vw;
}
${device.desktop}{
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: 10vw;
}
`
export const CustomerJourneySectionEndRow = styled.div`

display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-content: center;

${device.mobile}{
    margin-top:-50vh;
}

${device.tablet}{
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 10vw;
}
${device.desktop}{
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 10vw;
}
`

export const CustomerJourneyContentSection = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-content: center;
padding: 1vw;

${device.mobile}{
    margin-top:5vh;
}

`

export const CircleSpan = styled.span`
height: 30px;
width: 30px;
border-radius: 50%;
display: grid;
justify-content: center;
align-content: center;
font-weight: 600;
font-size: large;
background-color: ${Colors.PrimaryThemeColor};
color: ${Colors.PrimaryBackground};
`

export const CustomerJourneylineSection = styled.div`
display: grid;
justify-content: center;
align-content: center;
grid-template-columns: 1fr;


${device.tablet}{
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
padding-right: 20vw;
}
${device.desktop}{
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
padding-right: 20vw;
}
`

export const CustomerJourneyline = styled.div`
width: 0.9vw;
height: 100vh;
z-index: -99;
background-color: ${Colors.PrimaryThemeColor};

${device.mobile}{
    margin-top: -50vh;
    margin-left: 8vh;
}

${device.tablet}{
width: 0.8vw;
height: 30vh;
transform: rotateZ(25deg);
margin-top: -20vw;
margin-bottom:  -10vw;
margin-left: 10vw;
background-color: ${Colors.SelectiveYellow};
}
${device.desktop}{
width: 0.8vw;
height: 50vh;
transform: rotateZ(30deg);
margin-top: -7vw;
margin-bottom: -7vw;
margin-left: 10vw;
background-color: ${Colors.SelectiveYellow};
}
`
export const CustomerJourneylineNegative = styled.div`
background-color: ${Colors.PrimaryThemeColor};
z-index: -99;

${device.tablet}{
width: 0.8vw;
height: 30vh;
transform: rotateZ(-15deg);
margin-top: -20vw;
margin-bottom:  -10vw;
margin-left: 10vw;
background-color: ${Colors.SelectiveYellow};
}
${device.desktop}{
width: 0.8vw;
height: 50vh;
transform: rotateZ(-25deg);
margin-top: -7vw;
margin-bottom: -7vw;
margin-left: 10vw;
background-color: ${Colors.SelectiveYellow};
}
`

export const TitleTrackPet = styled.div`
background-color: ${Colors.PrimaryThemeColor};
color: ${Colors.PrimaryBackground};
padding: 1vw;
border-radius: 18px;
font-size: 2vw;
text-align: center;
margin-top: 3vh;
margin-bottom: 5vh;
${device.mobile}{
    font-size: 8vw;
}
${device.tablet}{
    font-size: 3vw;
}
`

export const CustomerJourneyContentColor = styled.div`
color: ${Colors.SelectiveYellow};
font-weight:600;
padding-bottom:1vh
`
