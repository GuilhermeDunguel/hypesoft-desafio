import styled from 'styled-components';

export const AboutSectionContainer = styled.section`
  margin-top: 8.25rem;

  /* max-width: 82.5rem; */

  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  gap: 5.5rem;

`

export const AboutImageWrapper = styled.div`
  position: relative;
  border-radius: 10px;

  width: 35rem;
  height: 33.875rem;

  &::after {
    position: absolute;
    left: 2rem;
    top: 2rem;
    z-index: -1;

    content: '';
    width: 35rem;
    height: 33.875rem;

    border-radius: 0.625rem;
    background-color: ${props => props.theme.gray50};
  }
`

export const AboutTextsWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 32px;
  

  h2 {
    color: ${props => props.theme.gray50};
    font-size: 3rem;
    font-weight: 500;
    line-height: 3.5rem;
    max-width: 34.375rem;
  }

  p {
    color: ${props => props.theme.gray500};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    max-width: 41.25rem;
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
      max-width: 96px;
    }

    span {
      color: ${props => props.theme.pink500};
      font-size: 3.5rem;
      line-height: 4rem;
    }
  }
`