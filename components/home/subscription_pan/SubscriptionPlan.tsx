import { NextPage } from "next";
import {sizes, useMediaQuery} from "../../../styles/media/media";
import Image from "next/image";
import { SubscriptionPlanContainer, SubscriptionPlanTitleContainer,
        SubscriptionPlancontentContainer, BreakLine,
        SubscriptionPlanCardContainer, SubscriptionPlanCardSection, SubscriptionPlanTitleMonthy,
        SubscriptionPlanCard, SubscriptionPlanCardPlanHeading, SubscriptionPlanCardStartingAt,
        SubscriptionPlanCardPrice, SubscriptionPlanTickColor, SubscriptionPlanDeveryContainer,
        SubscriptionPlanItemCount, SubscriptionPlanItemDisplay, SubscriptionPlanChoose,
        SubscriptionPlanCardTopPoints, SubscriptionPlanCardBottomCustom } from "./SubscriptionPlan.style";




const SubscriptionPlan:NextPage = () => {
    return (
        <>
        <SubscriptionPlanContainer>
            <SubscriptionPlanTitleContainer>
            SUBSCRIPTION PLANS
            </SubscriptionPlanTitleContainer>
            <SubscriptionPlancontentContainer>
                Choose the plan that’s right for you
            </SubscriptionPlancontentContainer>
            <BreakLine></BreakLine>
            <SubscriptionPlanCardSection>
                <SubscriptionPlanTitleMonthy>Billed Monthly</SubscriptionPlanTitleMonthy>
                <SubscriptionPlanCardContainer>

                    <SubscriptionPlanCard>
                        <SubscriptionPlanCardTopPoints>
                        <SubscriptionPlanCardPlanHeading>Basic</SubscriptionPlanCardPlanHeading>
                        <SubscriptionPlanCardStartingAt>Starting at</SubscriptionPlanCardStartingAt>
                        <SubscriptionPlanCardPrice>AED 76/month</SubscriptionPlanCardPrice>
                        </SubscriptionPlanCardTopPoints>
                        <div>
                        <Image
                            src="/static/images/basic_pet_subscription_plan.png"
                            alt="identify-need"
                            width={250}
                            height={250}
                            />
                        </div>
                        <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor> Food</div>
                        <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor> Litter & Hygiene</div>
                        <div>
                            <SubscriptionPlanDeveryContainer>
                            <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor> Delivery</div>
                                <SubscriptionPlanItemDisplay>
                                    <SubscriptionPlanItemCount>3</SubscriptionPlanItemCount><div>Items</div>
                                </SubscriptionPlanItemDisplay>
                            </SubscriptionPlanDeveryContainer>
                        </div>
                        <div>
                        <SubscriptionPlanChoose>Choose</SubscriptionPlanChoose>
                        </div>
                    </SubscriptionPlanCard>

                    <SubscriptionPlanCard>
                    <SubscriptionPlanCardTopPoints>
                        <SubscriptionPlanCardPlanHeading>Standard</SubscriptionPlanCardPlanHeading>
                        <SubscriptionPlanCardStartingAt>Starting at</SubscriptionPlanCardStartingAt>
                        <SubscriptionPlanCardPrice>AED 152/month</SubscriptionPlanCardPrice>
                    </SubscriptionPlanCardTopPoints>
                        <div>
                        <Image
                            src="/static/images/standard_pet_subscription_plan.png"
                            alt="identify-need"
                            width={230}
                            height={250}
                            />
                        </div>
                        <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor> Food</div>
                        <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor> Litter & Hygiene</div>
                        <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor> Delivery</div>
                        <div>
                            <SubscriptionPlanDeveryContainer>
                            <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor>Grooming</div>
                            <SubscriptionPlanItemDisplay><SubscriptionPlanItemCount>4</SubscriptionPlanItemCount> <div>Items</div></SubscriptionPlanItemDisplay>
                            </SubscriptionPlanDeveryContainer>
                        </div>
                        <div>
                        <SubscriptionPlanChoose>Choose</SubscriptionPlanChoose>
                        </div>
                    </SubscriptionPlanCard>

                    <SubscriptionPlanCard>
                    <SubscriptionPlanCardTopPoints>
                        <SubscriptionPlanCardPlanHeading>Build Your Own</SubscriptionPlanCardPlanHeading>
                        <SubscriptionPlanCardStartingAt>Starting at</SubscriptionPlanCardStartingAt>
                        <SubscriptionPlanCardPrice>AED 120/month</SubscriptionPlanCardPrice>
                    </SubscriptionPlanCardTopPoints>
                        <div>
                        <Image
                            src="/static/images/custom_pet_subscription_plan.png"
                            alt="identify-need"
                            width={230}
                            height={250}
                            />
                        </div>
                        <SubscriptionPlanCardBottomCustom>
                        <div><SubscriptionPlanTickColor>✓</SubscriptionPlanTickColor></div><div>A customised package that meets your pets need</div>
                        </SubscriptionPlanCardBottomCustom>
                        <div>
                        <SubscriptionPlanChoose>Choose</SubscriptionPlanChoose>
                        </div>
                    </SubscriptionPlanCard>
                </SubscriptionPlanCardContainer>
            </SubscriptionPlanCardSection>
        </SubscriptionPlanContainer>
        </>
    )
}
export default SubscriptionPlan