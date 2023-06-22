import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="faq-area-two ptb-100">
        <div className="faq-shape">
          {/* <img src="/images/faq-shape1.png" alt="Faq" />
          // <img src="/images/faq-shape2.png" alt="Faq" /> */}
        </div>

        <div className="container">
          <div className="section-title">
            <h2>Why We Need You</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="faq-img">
                <img src="/images/faq-main.jpg" alt="Faq" />

                {/* <div onClick={() => setOpen(true)} className="popup-youtube">
                  <i className="icofont-ui-play"></i>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <Accordion allowZeroExpanded preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Donor satisfaction is guaranteed</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      All donations are important to us. we always try to do our
                      best to help the poor. therefore good volunteering can
                      make a campain a success.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>We help nonprofits become more effective</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Nonprofits organigation always based on charity. charity
                      is for helping people, a great team always do best.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>We’re quick and nimble. We’re truly global</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We are always trying to help kids in every room in the
                      world. we do oversiege campain also. so a local volunteer
                      will be very helpful with the curtains.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>We do charity to other organigation also</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      There are many children aid local/international
                      organigation out there. we also do charity there. so
                      another volunteer organization can volunteer to join us.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                {/* <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What is community spread?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people
                    </p>
                  </AccordionItemPanel>
                </AccordionItem> */}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default FaqSection;
