import { NextPage } from "next";
import Link from 'next/link'

import Image from "next/image";
import { ContentHeroSection, HeroContainer, MobilePreviewImage,
         ShowCaseHeroSection, ClipContainer, DontWorryContainer,
         DontWorryContainerSpan, HeroParagraph, BreakLine, AppImageLink, AppImageContiner  } from "./hero.style";

const Hero: NextPage = () => {
  return (
    <>
    <HeroContainer>
    <ClipContainer></ClipContainer>
    <ContentHeroSection>
      <DontWorryContainer>
        Dont worry,<br/>Leave your pet to us!<br/><DontWorryContainerSpan>We take good care.</DontWorryContainerSpan>
        </DontWorryContainer>
        <BreakLine></BreakLine>
        <HeroParagraph>
        Our comprehensive solution includes delivery of Pet care, Food,<br/> Grooming & Health service as a packaged experience on a scheduled<br/> basis for the well-being of your pet.
        </HeroParagraph>
        <AppImageContiner>

        <AppImageLink href={`#`} target={"_blank"}>
        <Image
              src="/static/images/apple-store.png"
              alt="apple-store Preview"
              width={198}
              height={76}
            />
        </AppImageLink>
        <AppImageLink href={`#`} target={"_blank"} >
        <Image
              src="/static/images/play-store.png"
              alt="play-store Preview"
              width={198}
              height={76}
            />
        </AppImageLink>

        </AppImageContiner>
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
