import React from 'react'
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
import home2 from '../assets/home2.png'
import styled from 'styled-components';
import { 
  AboutSectionContainerStyled,
  DescriptionStyled,
  ImageStyled
} from '../styles';

const ServicesSection = () => {
  return (
    <ServicesSectionStyled>
      <DescriptionStyled>
        <h2>High <span>quality</span> services</h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt='clock' />
                <h3>Effecient</h3>
              </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt='diaphragm' />
                <h3>Diaphragm</h3>
              </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt='money' />
                <h3>Affordable</h3>
              </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt='teamwork' />
                <h3>Teamwork</h3>
              </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home2} alt="home2" />
      </ImageStyled>
    </ServicesSectionStyled>
  )
};

const ServicesSectionStyled = styled(AboutSectionContainerStyled)`
h2{
  padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`

const Card = styled.div`
  flex-basis: 15rem;
  .icon{
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;

    }
  }
`

export default ServicesSection
