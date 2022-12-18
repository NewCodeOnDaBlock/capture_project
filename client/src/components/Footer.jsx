import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
        <p>©2023 Capture, LLC. All rights reserved.</p>
    </FooterStyled>
  )
};

const FooterStyled = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: center;
align-items: center;
background: #282828;
  p{
  color: white;
  font-size: 0.7rem;
  font-weight: lighter;
  }
  `;

export default Footer
