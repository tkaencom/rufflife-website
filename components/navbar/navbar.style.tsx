import styled from "styled-components";
import {device} from "../../styles/media/media";
import Image from "next/image";
import { Colors, RootContainerMargin } from "../../styles/globalstyles";


export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 12vh;
  justify-content: center;
  align-content: center;
  margin: ${RootContainerMargin.mobile};

${device.tablet}{
  grid-template-columns: 3fr 1fr;
  margin: ${RootContainerMargin.tablet};
  }
${device.desktop}{
  grid-template-columns: 3fr 1fr;
  margin: ${RootContainerMargin.desktop};
}

`;

export const GetContainer = styled.div`

${device.mobile}{
  display: none;
}

justify-content: end;
align-content: center;

${device.tablet}{
  display: grid;
};

${device.desktop}{
  display: grid;
};
`
export const GetAppBtn = styled.button`
  background-color: ${Colors.PrimaryThemeColor};
  width: 15vh;
  height: 5vh;
  border: none;
  text-align: center;
  font-size: 14px;
  color: white;
  border-radius: 15px;
  cursor: pointer;

 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    opacity: 0.9;
  }
`;

export const LogoImageWrap = styled.div`
  width: 100%;

  ${device.mobile}{
  display: flex;
  justify-content: center;
  align-items: center;
}

${device.tablet}{
  display: block;
}

${device.desktop}{
  display: block;
}
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
