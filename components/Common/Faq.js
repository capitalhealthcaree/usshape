import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqSection = () => {
  return (
    <>
      <div className="faq-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>FAQs for Nagy Loan Program for Young Physicians</h2>
          </div>

          <Accordion allowZeroExpanded preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    Can any physician apply for Nagy Loan program for young
                    physicians?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Physicians who graduated within last three years can apply for
                  this program. Purpose is that the candidate must be ready to
                  enter the match before five years of graduation.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Who is eligible for the loan?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Only government medical Colleges graduates who got admission
                  on open merit are eligible for loan program. A physician or
                  medical student who has done elective/observership/ externship
                  in USA is NOT eligible for loan. Any overseas Pakistani who
                  went to do MBBS in Pakistan is not eligible for this loan.
                </p>
                <p>
                  Any MPH, PhD. Research or any other healthcare higher studies
                  candidates are not eligible for this loan.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    How does US SHAPE determine financial eligibility?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  US SHAPE uses a few variables to determine that. For example a
                  household with monthly income of Pakistani Rupees 100k with
                  one Child may not be eligible for the loan but 150k income
                  with five members may be eligible. Due Diligence is done by
                  the team.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    How to access Nagy Loan Program for young physicians?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  First you make sure you full-fill eligibility criteria by
                  reading all FAQs. After that you will contact your alumni in
                  United States using
                  <a
                    style={{ color: "white" }}
                    href="https://appna.org/"
                    target="_blank"
                  >
                    www.appna.org
                  </a>
                  . Your alumni can have their own loan program so you might not
                  need US SHAPE help. If they don’t have, or don’t have enough
                  funds, they will contact us on your behalf to help their
                  alumnus fellow and we will start Due Diligence process. In
                  case you full-fill all above criteria but have no alumnus in
                  USA then you can contact US SHAPE directly
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Can you please explain this entire process?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Motivated students/fresh graduates (within three years of
                  graduation) who want to do USMLE but don’t have financial
                  resources contact their alumni to approach US SHAPE We
                  evaluate them! Once they fullfill criteria; we ask them to do
                  one USMLE step and bring 240 plus scores. They should be
                  resourceful and motivated enough to earn one step fee by
                  themselves. (In the past it was any step but now it’s step 2
                  since step one is just pass or fail)
                </p>
                <p>
                  After that we pay for step 1 which they have to pass. (If they
                  have already passed step one, please don’t ask for
                  reimbursement. We don’t owe you anything. It’s just our effort
                  to make you successful). Once you have passed both steps we
                  will pay for your ticket and Pathway 6/OET/step 3 whatever
                  applicable to apply for US visa (Total $3000). Once you pass
                  it, we will pay for your interviews (Total $3000). So total
                  loan will be $6000 to $7000. We aren’t responsible for visa
                  processing or accommodation in USA. Please check websites and
                  ask colleagues how they have managed it.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    Do you give loan for elective/observership/externship in
                    USA?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  No we don’t give loan for either of them. A physician or
                  medical student who has done elective/observership/ externship
                  in USA is ineligible for loan.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="g">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    What if I don’t disclose my parents real income or previous
                    electives/externship?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We use US state medical board disclosure agreement. In case of
                  false or incorrect information or non disclosure; legal action
                  will be taken accordingly in USA as well as in country of
                  origin.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How will I return loan after I get matched?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You will start paying back $500 a month starting first month
                  of internship.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="i">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    What if I get loan; pass all steps and apply for March but
                    get unmatched; will I get another loan for next match?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  US SHAPE only offers loan once. If get unmatched; it will be
                  your own responsibility to arrange finances for next match.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="j">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                    What if I get loan; pass all steps and apply for March but
                    get unmatched and return home. Will I have to pay back loan?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  This is a loan and must be paid back whether you don’t get
                  matched or your visa is rejected. However we are here to help
                  you and make things easier for you! Installments will be made
                  easier according to circumstances.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
