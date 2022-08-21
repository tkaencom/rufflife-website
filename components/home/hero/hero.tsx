import { NextPage } from "next";

import Image from "next/image";
import { ContentHeroSection, HeroContainer, MobilePreviewImage,
         ShowCaseHeroSection, ClipContainer, DontWorryContainer,
         DontWorryContainerSpan  } from "./hero.style";

const Hero: NextPage = () => {
  return (
    <>
    <HeroContainer>
    <ClipContainer></ClipContainer>
    <ContentHeroSection>
    <DontWorryContainer>
      Dont worry,<br/>Leave your pet to us!<br/><DontWorryContainerSpan>We take good care.</DontWorryContainerSpan>
      </DontWorryContainer>
      <div>
      Our comprehensive solution includes delivery of Pet care, Food, Grooming & Health service as a packaged experience on a scheduled basis for the well-being of your pet.
      </div>
    </ContentHeroSection>
    <ShowCaseHeroSection>
    <MobilePreviewImage>
          <Image
            src="/static/images/hero-mobile-preview.png"
            alt="Ruff life Mobile Preview"
            width={770}
            height={780}
          />
    </MobilePreviewImage>
    </ShowCaseHeroSection>

    </HeroContainer>

    </>
  );
};

export default Hero;
