import styled from "styled-components";
import {device} from "../../../styles/media/media";
import { Colors, RootContainerMargin } from "../../../styles/globalstyles";
import SubscriptionPlan from './SubscriptionPlan';


export const SubscriptionPlanContainer = styled.div`
margin: ${RootContainerMargin.mobile};
padding-top: 5%;
${device.tablet}{
margin: ${RootContainerMargin.tablet};
}
${device.desktop}{
margin: ${RootContainerMargin.desktop};
font-family: 'Poppins', sans-serif;
}
`


export const SubscriptionPlanTitleContainer = styled.div`
display: flex;
justify-content: center;
justify-items: center;
letter-spacing: 0.26em;
line-height: 3vh;
`
export const SubscriptionPlancontentContainer = styled.div`
padding-top: 1%;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
text-align: center;
font-size: 1.6vw;
display: flex;
justify-content: center;
justify-items: center;
margin-bottom: 4vh;
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

export const SubscriptionPlanCardSection = styled.div`
display: grid;
grid-template-columns: 1fr;
background-color: ${Colors.OrangePeel};
border-radius: 25px;
`
export const SubscriptionPlanTitleMonthy = styled.div`
display: grid;
justify-content:center;
justify-items: center;
padding: 2vh;
`

export const SubscriptionPlanCardContainer = styled.div`
display: grid;
justify-content:center;
justify-items: center;
margin-bottom: 10vh;
grid-template-columns: 1fr;
${device.tablet}{
    grid-template-columns: 1fr 1fr;
}

${device.desktop}{
    grid-template-columns: 1fr 1fr 1fr;
}
`

export const SubscriptionPlanCard = styled.div`
display: grid;
grid-template-columns: 1fr;
background-color: white;
padding: 4%;
border-radius: 25px;
width: 50%;
margin-bottom: 4vh;
`

export const SubscriptionPlanCardPlanHeading = styled.div`
font-weight: 600;
`
export const SubscriptionPlanCardStartingAt = styled.div`
font-size: x-small;
font-weight: 100;

`

export const SubscriptionPlanCardPrice = styled.div`
font-size: 1.3em;
font-weight: bolder;
`

export const SubscriptionPlanCardTopPoints = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content:center;
justify-items: start;
`
export const SubscriptionPlanTickColor = styled.span`
font-size: 1.3em;
font-weight: bolder;
color: ${Colors.SelectiveYellow};
padding-right: 4px;
`

export const SubscriptionPlanDeveryContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content:center;
justify-items: start;
`

export const SubscriptionPlanItemDisplay = styled.div`
margin-top: -2.5vh;
margin-left: 4vh;
`
export const SubscriptionPlanItemCount = styled.span`
display: grid;
justify-content:center;
justify-items: center;
font-size: 1.4em;
color: ${Colors.PrimaryThemeColor};
margin-bottom: -1vh;
`
export const SubscriptionPlanCardBottom = styled.div`
display: grid;
justify-content:center;
justify-items: start;
`

export const SubscriptionPlanCardBottomCustom = styled.div`
display: grid;
grid-template-columns: 1fr 6fr;
justify-content:center;
justify-items: start;
`

export const SubscriptionPlanChoose = styled.a`
margin-top: 1vh;
display: grid;
height: 35px;
justify-content:center;
align-items: center;
border: 1px solid;
border-radius: 20px;
cursor: pointer;
:hover{
    background-color: grey;
    color: white;
}
`