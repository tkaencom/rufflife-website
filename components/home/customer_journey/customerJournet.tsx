import { NextPage } from "next";
import {sizes, useMediaQuery} from "../../../styles/media/media";
import Image from "next/image";
import { CustomerJourneyTitleContainer, CustomerJourneycontentContainer,
            CustomerJourneyContainer, CircleSpan, CustomerJourneySection,
            CustomerJourneyContentSection, CustomerJourneylineSection,
            CustomerJourneyline, CustomerJourneylineNegative, CustomerJourneySectionEndRow,
            TitleTrackPet, CustomerJourneyContentColor,
            BreakLine } from "./customerJournet.style";


const CustomerJpurney: NextPage = ()=>{
    const isBreakpoint = useMediaQuery((sizes.tablet -1))
    return (
        <CustomerJourneyContainer>
        <CustomerJourneyTitleContainer>CUSTOMER JOURNEY</CustomerJourneyTitleContainer>
        <CustomerJourneycontentContainer>
        Have your pet taken for health checks & vaccinations in one of the many <br/>clinics partnered with rufflife, to give your pet the best medical care possible
        </CustomerJourneycontentContainer>
        <BreakLine></BreakLine>
        <div>
            <CustomerJourneySection>
                <CustomerJourneyContentSection>
                    <div>
                        <Image
                            src="/static/images/identify-need.png"
                            alt="identify-need"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                        <CircleSpan>1</CircleSpan><br/>
                        <CustomerJourneyContentColor>IDENTIFY NEEDS</CustomerJourneyContentColor>
                        Select your prefered package & service period
                    </div>
                </CustomerJourneyContentSection>
            {isBreakpoint ?
                <CustomerJourneyContentSection>
                    <div><Image
                            src="/static/images/select-preferences.png"
                            alt="select-preferences"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                    <CircleSpan>2</CircleSpan><br/>
                    <CustomerJourneyContentColor>SELECT PREFERENCES </CustomerJourneyContentColor>
                        Pick Your favourite food brands, grooming services & Clinics
                    </div>
                </CustomerJourneyContentSection>
            :
                <CustomerJourneyContentSection>
                    <div>
                    <Image
                            src="/static/images/pet-pick-up.png"
                            alt="pet-pick-up"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                        <CircleSpan>3</CircleSpan><br/>
                        <CustomerJourneyContentColor>  PET PICK UP</CustomerJourneyContentColor>
                        Have our Vets pick-up & take care of your pet throughout the journey
                    </div>
                </CustomerJourneyContentSection>
            }
            {isBreakpoint ?
                <CustomerJourneyContentSection>
                <div>
                <Image
                        src="/static/images/pet-pick-up.png"
                        alt="pet-pick-up"
                        width={140}
                        height={140}
                        />
                </div>
                <div>
                    <CircleSpan>3</CircleSpan><br/>
                    <CustomerJourneyContentColor>PET PICK UP</CustomerJourneyContentColor>
                    Have our Vets pick-up & take care of your pet throughout the journey
                </div>
                </CustomerJourneyContentSection>
            :
                <CustomerJourneyContentSection>
                    <div>
                    <Image
                            src="/static/images/clinic.png"
                            alt="clinic"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                    <CircleSpan>5</CircleSpan><br/>
                    <CustomerJourneyContentColor> CLINIC</CustomerJourneyContentColor>
                            Have your pet Groomed in our Mobile Van or at a Dedicated Grooming center
                    </div>
                </CustomerJourneyContentSection>
            }
            </CustomerJourneySection>
            {isBreakpoint ? 
            <CustomerJourneylineSection>
            <CustomerJourneyline></CustomerJourneyline>
            </CustomerJourneylineSection>
            :
                <CustomerJourneylineSection>
                    <CustomerJourneylineNegative></CustomerJourneylineNegative>
                    <CustomerJourneyline></CustomerJourneyline>
                    <CustomerJourneylineNegative></CustomerJourneylineNegative>
                    <CustomerJourneyline></CustomerJourneyline>
                    <CustomerJourneylineNegative></CustomerJourneylineNegative>
                </CustomerJourneylineSection>
            }
            <CustomerJourneySectionEndRow>
            {isBreakpoint ?
                <CustomerJourneyContentSection>
                <div>
                <Image
                        src="/static/images/grooming.png"
                        alt="grooming"
                        width={140}
                        height={140}
                        />
                </div>
                <div>
                <CircleSpan>4</CircleSpan><br/>
                <CustomerJourneyContentColor> GROOMING </CustomerJourneyContentColor>
                    Have your pet Groomed in our Mobile Van or at a Dedicated Grooming center
                </div>
                </CustomerJourneyContentSection>
            :
                <CustomerJourneyContentSection>
                    <div><Image
                            src="/static/images/select-preferences.png"
                            alt="select-preferences"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                    <CircleSpan>2</CircleSpan><br/>
                    <CustomerJourneyContentColor>SELECT PREFERENCES</CustomerJourneyContentColor>
                        Pick Your favourite food brands, grooming services & Clinics
                    </div>
                </CustomerJourneyContentSection>
            }
            {isBreakpoint ?
                <CustomerJourneyContentSection>
                <div>
                <Image
                        src="/static/images/clinic.png"
                        alt="clinic"
                        width={140}
                        height={140}
                        />
                </div>
                <div>
                <CircleSpan>5</CircleSpan><br/>
                <CustomerJourneyContentColor>CLINIC</CustomerJourneyContentColor>
                    Have your pet Groomed in our Mobile Van or at a Dedicated Grooming center
                </div>
            </CustomerJourneyContentSection>
            :
                <CustomerJourneyContentSection>
                    <div>
                    <Image
                            src="/static/images/grooming.png"
                            alt="grooming"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                    <CircleSpan>4</CircleSpan><br/>
                    <CustomerJourneyContentColor>GROOMING</CustomerJourneyContentColor>
                        Have your pet Groomed in our Mobile Van or at a Dedicated Grooming center
                    </div>
                </CustomerJourneyContentSection>
            }
                <CustomerJourneyContentSection>
                    <div>
                    <Image
                            src="/static/images/pet-drop-off.png"
                            alt="pet-drop-off"
                            width={140}
                            height={140}
                            />
                    </div>
                    <div>
                    <CircleSpan>6</CircleSpan><br/>
                    <CustomerJourneyContentColor>PET DROP OFF</CustomerJourneyContentColor>
                        Have your Pet dropped off to you with Food and litter for a month
                    </div>
                </CustomerJourneyContentSection>
            </CustomerJourneySectionEndRow>
            <TitleTrackPet>Track your pets journey every step of the way through "Pet Experience"</TitleTrackPet>
        </div>
        </CustomerJourneyContainer>
    )
}


export default CustomerJpurney