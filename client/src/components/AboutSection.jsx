import React from 'react';
import home1 from '../assets/home1.png';
import styled from 'styled-components';
import { 
  AboutSectionContainerStyled,
  DescriptionStyled,
  ImageStyled,
  HideStyled 
} from '../styles';

const AboutSection = () => {
  return (
    <AboutSectionContainerStyled>
      <DescriptionStyled>
        <div className='title'>
          <HideStyled>
            <h2>We work to make</h2>
          </HideStyled>
          <HideStyled>
            <h2>
              your <span>dreams</span> come
            </h2>
          </HideStyled>
          <HideStyled>
            <h2>true.</h2>
          </HideStyled>
        </div>
        <p>Contact us for any photography  or videography ideas that you have. 
          We have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </DescriptionStyled> 
      <ImageStyled>
        <img src={home1} alt='imagePhoto'/>
      </ImageStyled> 
    </AboutSectionContainerStyled>
  )
}

export default AboutSection;
