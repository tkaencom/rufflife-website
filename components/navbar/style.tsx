import styled from "styled-components";
import media from "../../styles/media/media";
import Image from "next/image";
import { Colors } from "../../styles/globalstyles";

export const NavbarContainer = styled.div`
  margin: 1;
  padding: 1;
  height: 15vh;
  width: 100vw;
  background-color: red;

  ${media.tablet`
    color: #004080;
    background-color: #80003c;

`};
  ${media.desktop`
    background-color: #008051;
`};
`;

export const GetAppBtn = styled.button`
  width: 20vh;
  height: 10vh;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  color: white;
  background-color: ${Colors.PrimaryThemeColor} !important;
  border-radius: 50px;
  cursor: pointer;
`;

export const LogoImageWrap = styled.div`
  margin: 0;
  padding: 0;

  width: 100%;
`;
