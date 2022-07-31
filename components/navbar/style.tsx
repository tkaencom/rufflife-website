import styled from "styled-components";
import media from "../../styles/media/media";
import Image from 'next/image'

export const NavbarContainer = styled.div`
margin: 0;
padding: 0;

${media.mobile`
    height: 50px;
    width: 10px
    padding: 3rem 6rem;
    background-color: red;
`};

${media.tablet`
    height: 70px;
    width: 30px
    padding: 3rem 6rem;
    color: green;
    background-color: green;

`};
${media.desktop`
    height: 100px;
    background-color: green;
`};
`;


export const LogoImage = styled(Image)`
  border-radius: 10px;
`;


export const LogoImageWrap = styled.div`

  width: 100%;
`;