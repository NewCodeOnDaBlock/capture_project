import React from 'react'
import styled from 'styled-components';
import { 
  AboutSectionContainerStyled
} from '../styles';

const FaqSection = () => {
  return (
    <FAQStyled>
      <div className="faq">
        <h2>Any Questions? <span>FAQ</span></h2>
        <div className="question">
          <h4>Image use?</h4>
          <div className="answer">
            <p>
              We are always updating the blog and website as well as entering competitions and applying for qualifications.
              We may, therefore, want to use some of your images for this but you can rest assured we will ask for permission 
              first and get a model release from you. We always respect your privacy and if you do not want this that’s absolutely fine.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Are You Fully Insured?</h4>
          <div className="answer">
            <p>
              Yes, we are fully insured with both professional indemnity and public liability insurance.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Do I Have To Make A Booking? </h4>
          <div className="answer">
            <p>
            Yes. All our bookings are scheduled prior to the shoot at a convenient time and date. 
            This can be done via a link to my online booking calendar or just give me a call and we will be happy to arrange one for you.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>How long does a studio or location shoot take?</h4>
          <div className="answer">
            <p>
            A studio session can last around 60 minutes. This gives us plenty of time for wardrobe changes and the use of different backgrounds.
            A location shoot can last between 60 and 90 minutes as we walk around the grounds taking advantage of all the beauty spots.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
    </FAQStyled>
  )
}

const FAQStyled = styled(AboutSectionContainerStyled)`
display: block;
span {
  display: block;
}
h2 {
  padding-bottom: 2rem;
  font-weight: lighter;
}
.faq-line {
  background: #cccccc;
  height: 0.01rem;
  margin: 2rem 0rem;
  width: 100%;
}
.question{
  padding: 3rem 0rem;
  cursor: pointer;
}
.answer{
  padding: 2rem 0rem;
  p{
    padding: 1rem 0rem;
    font-size: 1rem;
  }
}
`;



export default FaqSection
