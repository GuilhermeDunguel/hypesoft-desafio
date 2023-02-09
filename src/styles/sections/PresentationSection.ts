import styled from 'styled-components'

export const PresentationSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  
`

export const PresentationLeftSide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10rem;

  height: 80vh;

  width: 60%;
  z-index: 5;

  /* @media (max-height: 800px) {
    gap: 3rem;
  } */

`

export const PresentationTextAnButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    max-width: 45.625rem;

    color: ${props => props.theme.gray50};
    font-size: 5rem;
    font-weight: 400;
    line-height: 6.125rem;
    
    /* @media (max-width: 1440px) {
      font-size: 4rem;
    } */

    span {
      position: relative;

      color: ${props => props.theme.purple500};

      &::after {
        position: absolute;
        left: 0.625rem;
        bottom: 0.75rem;

        content: '';
        max-width: 37.125rem;
        max-height: 2.25rem;
        width: 100%;
        height: 100%;

        background-color: ${props => props.theme.purple500};

        filter: opacity(15%);
      }
    }
  }
  
  p {
    max-width: 43.75rem;

    color: ${props => props.theme.gray500};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2rem;

    /* @media (max-width: 1440px) {
      max-width: 40rem;

      font-size: 1.15rem;
    } */
  }
  div {
    display: flex;
    gap: 1rem;
  }

`

export const PresentationRightSide = styled.section`
  flex: 1;

  height: 90vh;

  background-color: ${props => props.theme.purple500};

  img {
    object-fit: cover;
    margin-left: -55%;
    /* margin-bottom: -5px; */
    width: 135%;
    /* max-width: 200%; */
    height: 100%;
  }
`

export const FollowMeOnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    color: ${props => props.theme.gray50};
    font-size: 16px;
    font-weight: 400px;
  }

  div {
    display: flex;
    gap: 12px;

    a {
      padding: 14px;

      color: ${props => props.theme.gray800};
      line-height: 0;
      
      border-radius: 3px;
      background-color: ${props => props.theme.gray50};

      transition: filter 0.2s;

      &:nth-child(2) {
        color: ${props => props.theme.gray50};
        background-color: ${props => props.theme.purple500};
      }

      &:hover {
        filter: brightness(90%);
      }
    }
  }
`