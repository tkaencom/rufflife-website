import styled from "styled-components";
import media from "../../styles/media/media";
import Image from "next/image";
import { Colors } from "../../styles/globalstyles";

export const NavbarContainer = styled.div`
  display: flex;
  margin: 0;
  height: 12vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const GetAppBtn = styled.button`
  display: none;
  background-color: ${Colors.PrimaryThemeColor};
  display: block;
  margin: 3%;
  width: 15vh;
  height: 5vh;
  border: none;
  text-align: center;
  font-size: 16px;
  color: white;
  border-radius: 15px;
  cursor: pointer;

  ${media.mobile`
  display: none;
`};

  ${media.tablet`
  display: block;
`};

  ${media.desktop`
  display: block;
`};
  &:hover {
    opacity: 0.9;
  }
`;

export const LogoImageWrap = styled.div`
  margin: 3%;
  width: 100%;

  ${media.mobile`
  display: flex;
  justify-content: center;
  align-items: center;
`};

  ${media.tablet`
  display: block;
`};

  ${media.desktop`
  display: block;
`};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
