import styled from 'styled-components';

export const AboutSectionContainerStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const DescriptionStyled = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border: none;
    border-radius: 50%;
  }
`;

export const HideStyled = styled.div`
  overflow: hidden;
`;

