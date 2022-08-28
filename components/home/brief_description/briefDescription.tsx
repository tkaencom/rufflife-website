import { NextPage } from "next";
import Image from "next/image";
import { BriefDescriptionContainer, BriefDescriptionContainerTitle,
        BriefDescriptionContainerTitleContent, BreakLine, BriefDescriptionContainerContent } from "./briefDescription.style";


const BriefDescription: NextPage = () =>{
    return (
    <>
        <BriefDescriptionContainer>
            <div>
                <BriefDescriptionContainerTitle>
                    BRIEF DESCRIPTION
                </BriefDescriptionContainerTitle>
                <BriefDescriptionContainerTitleContent>
                Know how your pet is being taken care of
                </BriefDescriptionContainerTitleContent>
                <BreakLine>
                </BreakLine>
                <BriefDescriptionContainerContent>
                Be involved in your pet’s maintenance journey completely form start to finish.<br/><br/>
                We advocate transperancy in our platform so you will be notified of<br/>
                every step of your pet’s journey.
                </BriefDescriptionContainerContent>
            </div>
            <div>
            <Image
                src="/static/images/app-preview.png"
                alt="identify-need"
                width={500}
                height={500}
                />
            </div>
        </BriefDescriptionContainer>
    </>
    )
}

export default BriefDescription