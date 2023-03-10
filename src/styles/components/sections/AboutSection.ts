import styled from 'styled-components';

export const AboutSectionContainer = styled.section`
  display: flex;
  align-items: center;
  
  gap: 5.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const AboutImageWrapper = styled.div`
  position: relative;
  border-radius: 10px;

  width: 35rem;
  height: 33.875rem;

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  &::after {
    position: absolute;
    left: 2rem;
    top: 2rem;
    z-index: -1;

    content: '';
    width: 35rem;
    height: 33.875rem;

    border-radius: 10px;
    background-color: ${props => props.theme.gray50};
  }

  @media (max-width: 1200px) {
    width: 100%;

    &::after {
      display: none;
    }
  }
`

export const AboutTextsWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;
  
  

  h2 {
    color: ${props => props.theme.gray50};
    font-size: 3rem;
    font-weight: 500;
    line-height: 3.5rem;
    max-width: 39rem;
  }

  p {
    color: ${props => props.theme.gray500};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    max-width: 41.25rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const AboutExperienceAndProjectsWrapper = styled.div`

  display: flex;
  align-items: center;

  gap: 3.125rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      color: ${props => props.theme.gray50};
      font-size: 1.125rem;
      line-height: 1.75rem;
      max-width: 6rem;
    }

    span {
      color: ${props => props.theme.pink500};
      font-size: 3.5rem;
      line-height: 4rem;
    }
  }
`