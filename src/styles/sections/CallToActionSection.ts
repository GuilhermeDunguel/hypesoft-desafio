import styled from 'styled-components';

export const CallToActionSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.25rem;

  position: relative;

  max-height: 19.5rem;

  width: 82.5rem;
  height: 19.5rem;

  
  background-image: url('/Banner.svg');
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    width: 100%;
    background-image: url('/BannerMobile.svg');
  }

  p {
    max-width: 32rem;

    color: ${props => props.theme.gray50};
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
    text-align: center;

    span {
      color: ${props => props.theme.pink500}
    }
  }
`