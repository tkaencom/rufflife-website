
import { NextPage, } from "next";
import { NavbarContainer, LogoImageWrap, LogoImage, GetAppBtn} from "./style";
import Image from 'next/image'


const Navbar: NextPage = ()=>{
 return(
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
      <GetAppBtn>Get the App</GetAppBtn>
    </NavbarContainer>
    </>
 )
}

export default Navbar;