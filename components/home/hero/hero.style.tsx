import styled from "styled-components";
import {device} from "../../../styles/media/media";
import Image from "next/image";
import { Colors, RootContainerMargin } from "../../../styles/globalstyles";


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