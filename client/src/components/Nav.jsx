import React from 'react';
import styled from 'styled-components';


const Nav = () => {
  return (
    <NavStyled>
      <h1 id='logo'>
        <a href="_">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="_">1. About Us</a>
        </li>
        <li>
          <a href="_">2. Our Work</a>
        </li>
        <li>
          <a href="_">3. Contact Us</a>
        </li>
      </ul>
    </NavStyled>
  )
}

const NavStyled = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
a{
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
}
ul {
  display: flex;
  list-style: none;
}
li{
  padding-left: 2rem;
  position: relative;
}
#logo{
  font-size: 1.5rem;
  font-family: 'Lobster', cursive;
  font-weight: lighter;
}
`;

export default Nav
