import styled from 'styled-components'

export const PresentationSectionWrapper = styled.section`
  position: relative;

  display: flex;
  align-items: center;

  margin-left: 18.75rem;

  @media (max-width: 1680px) {
    margin-left: 9.375rem;
  }

  @media (max-width: 1440px) {
    margin-left: 6.25rem;
  }

  @media (max-width: 1200px) {
    margin-left: 0;
  }

`

export const PresentationLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10rem;

  height: 80vh;

  z-index: 5;

  @media (max-width: 1200px) {
    position: absolute;
    bottom: -21rem;
    left: 0;
    justify-content: center;

    padding: 1rem;

    height: 60vh;
    width: 320px;

    background-color: #121212;
    width: 100%;
    gap: 3rem;
  }
`

export const PresentationTextAnButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    max-width: 52rem;

    color: ${props => props.theme.gray50};
    font-size: 5rem;
    font-weight: 400;
    line-height: 6.125rem;

    @media (max-width: 800px) {
      font-size: 2.6rem;
      line-height: 3rem;
    }
  
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

  }
  div {
    display: flex;
    gap: 1rem;
  }

`

export const PresentationRightSide = styled.div`
  flex: 1;

  height: 90vh;

  background-color: ${props => props.theme.purple500};

  img {
    object-fit: cover;
    margin-left: -55%;
    width: 135%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    img {
      position: absolute;
      right: 0;
      width: 80%;
      height: 100%;
      margin-left: 0;
    }
  }
`

export const FollowMeOnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    color: ${props => props.theme.gray50};
    font-size: 1rem;
    font-weight: 400;
  }

  div {
    display: flex;
    gap: 0.75rem;

    a {
      padding: 0.875rem;

      color: ${props => props.theme.gray800};
      line-height: 0;
      
      border-radius: 3px;
      background-color: ${props => props.theme.gray50};

      transition: 0.2s;

      &:hover {
        color: ${props => props.theme.gray50};
        background-color: ${props => props.theme.purple500};
      }
    }
  }
`