import React from 'react';
import styled from 'styled-components';
import logo from '../assets/REEL.png';

const Nav = () => {
  return (
    <NavStyled>
      <img id='logo' src={logo} alt='logo' />
      <ul>
        <li>
          <a href="_">About Us</a>
        </li>
        <li>
          <a href="_">Our Work</a>
        </li>
        <li>
          <a href="_">Contact Us</a>
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
box-shadow: 1px 1px 10px #0000009b;
a{
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    color: #23d997;
  }
}
ul {
  display: flex;
  list-style: none;
}
li{
  padding-left: 2rem;
  position: relative;
}
img{
  width: 6rem;
  height: 6rem;
}
`;

export default Nav
