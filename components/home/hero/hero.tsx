import { NextPage } from "next";

import Image from "next/image";
import { ContentHeroSection, HeroContainer, ShowCaseHeroSection } from "./hero.style";

const Hero: NextPage = () => {
  return (
    <>
    <HeroContainer>
    <ContentHeroSection>
    <div>
      Dont worry,<br/>Leave your pet to us!<br/>We take good care.
      </div>
      <div>
      Our comprehensive solution includes delivery of Pet care, Food, Grooming & Health service as a packaged experience on a scheduled basis for the well-being of your pet.
      </div>
    </ContentHeroSection>
    <ShowCaseHeroSection>
    <Image
            src="/static/images/hero-mobile-preview.png"
            alt="Ruff life Mobile Preview"
            width={120}
            height={120}
          />
    </ShowCaseHeroSection>

    </HeroContainer>

    </>
  );
};

export default Hero;
