import styled from "styled-components";
import media from "../../styles/media/media";

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 3rem;
${media.mobile`
    height: 245px;
    width: 10px
    padding: 3rem 6rem;
    background-color: red;
`};

${media.tablet`
    height: 245px;
    width: 30px
    padding: 3rem 6rem;
    color: green;
    background-color: green;

`};
${media.desktop`
    padding: 3rem 6rem;
    height: 345px;
    width: 50px
    color: aqua;
    background-color: green;
`};
`;
