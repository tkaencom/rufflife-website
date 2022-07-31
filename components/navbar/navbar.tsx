
import { NextPage} from "next";
import { NavbarContainer, LogoImageWrap, LogoImage} from "./style";
// import Image from 'next/image'


const Navbar: NextPage = ()=>{
 return(
    <>
    <NavbarContainer>
    <LogoImageWrap>
        <LogoImage
          src="/static/images/rufflife-logo.png"
          alt="Ruff life logo"
          width={100}
          height={100}
        />
      </LogoImageWrap>
    </NavbarContainer>
    </>
 )
}

export default Navbar;