import styled from 'styled-components';

export const TestimonialsSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.125rem;
`

export const TestimonialsWrapper = styled.div`
  display: flex;
  gap: 1.625rem;

  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const TestimonialSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 19.5rem;

  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;

    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 800px) {
    position: relative;
    flex-direction: column;
    
    &::after {
      position: absolute;

      transform: rotate(135deg);

      bottom: -4rem;
      left: 50%;
      
      content: '';

      width: 0;
      height: 0;
      border-style: solid;
      border-width: 20px 20px 20px 0;
      border-color: transparent transparent ${props => props.theme.gray50} transparent;
    }
  }
`

export const TestimonialTextSide = styled.div`
  position: relative;
  flex: 1;
  flex-grow: 1;
  z-index: -2;
  padding: 3.125rem;

  border-radius: 4px;
  background-color: ${props => props.theme.gray50};


  &::after {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    z-index: -1;
    
    content: url('/quote.svg')

  }
`

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #FF8718;
      width: 2rem;
      height: 2rem;
    }
    h3 {
      color: ${props => props.theme.gray800};
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.75rem;
    }
  }

  p {
    color: ${props => props.theme.gray800};
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.2rem;

    @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  }

  
`