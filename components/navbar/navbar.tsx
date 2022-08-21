import { NextPage } from "next";
import { NavbarContainer, LogoImageWrap, GetAppBtn, GetContainer } from "./navbar.style";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <>
      <NavbarContainer>
        <LogoImageWrap>
          <Image
            src="/static/images/rufflife-logo.png"
            alt="Ruff life logo"
            width={120}
            height={120}
          />
        </LogoImageWrap>
        <GetContainer>
        <GetAppBtn>Get the App</GetAppBtn>
        </GetContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
