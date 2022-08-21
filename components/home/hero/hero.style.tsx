import styled from "styled-components";
import {device} from "../../../styles/media/media";
import Image from "next/image";
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
padding: 5%;
font-size: 3.5vw;
font-family: 'Poppins', sans-serif;
font-weight: 600;
line-height: 5vw;
`

export const DontWorryContainerSpan = styled.span`
color: ${Colors.PrimaryThemeColor};
`
