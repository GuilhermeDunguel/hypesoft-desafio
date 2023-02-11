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
  height: 100%
`

export const TestimonialSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 19.5rem;
`

export const TestimonialTextWrapper = styled.div`
  position: relative;
  flex: 1;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
  }
`