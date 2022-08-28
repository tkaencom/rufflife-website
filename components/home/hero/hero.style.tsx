import styled from "styled-components";
import {device} from "../../../styles/media/media";
import { Colors, RootContainerMargin } from "../../../styles/globalstyles";

export const ClipContainer = styled.div`
position: absolute;
top: 12vh;
left: 0;
width: 100vw;
height: 80vh;
clip-path: polygon(0 0, 100% 0%, 81% 65%, 0% 100%);
background-color: ${Colors.OrangePeel};
margin: ${RootContainerMargin.mobile};

${device.tablet}{
margin: ${RootContainerMargin.tablet};
height: 40vh;
}

${device.desktop}{
width: 80vw;
margin: ${RootContainerMargin.desktop};
}
`

export const HeroContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
margin: ${RootContainerMargin.mobile};
${device.tablet}{
grid-template-columns: 1fr 1fr;
margin: ${RootContainerMargin.tablet};
}

${device.desktop}{
grid-template-columns: 1fr 1fr;
margin: ${RootContainerMargin.desktop};
}

`

export const ContentHeroSection = styled.div`
display: grid;

`

export const ShowCaseHeroSection = styled.div`
display: grid;

`

export const MobilePreviewImage = styled.div`
width: 100%;
z-index: 1;
`;

export const DontWorryContainer = styled.div`
padding: 5% 5% 0 5% ;
font-size: 8vw;
font-family: 'Poppins', sans-serif;
font-weight: 600;
line-height: 9vw;


${device.tablet}{
    font-size: 4vw;
    line-height: 5vw;
}
${device.desktop}{
    font-size: 3.5vw;
    line-height: 5vw;
}
`

export const DontWorryContainerSpan = styled.span`
color: ${Colors.PrimaryThemeColor};
`

export const HeroParagraph = styled.div`
margin-left: 5%;
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;

${device.tablet}{
    margin-top: -5%;
}
${device.desktop}{
    margin-top: -10%;
}

`

export const BreakLine = styled.div`
margin: 5%;
width: 10%;
height: 0.6vw;
background-color: ${Colors.SelectiveYellow};
${device.mobile}{
    width: 20%;
    height: 2vw;
}
${device.tablet}{
margin: 0;
margin-left: 5%;
margin-top: -4%;
}
${device.desktop}{
margin: 0;
margin-left: 5%;
margin-top: -6%;
}
`

export const AppImageContiner = styled.div`
margin-top: 5%;
margin-left: 5%;
display: grid;
grid-template-columns: 1fr 1fr;
`
export const AppImageLink = styled.a`
text-decoration: none;
cursor: pointer;
&:hover {
    opacity: 0.8;
  }
`

