import styled from 'styled-components';

interface TestimonialSelectorButtonWrapperProps {
  active: boolean
}

export const TestimonialSelectorButtonWrapper = styled.div<TestimonialSelectorButtonWrapperProps>`
  position: relative;

  display: flex;
  align-items: center;

  padding: 1.5rem;

  gap: 1rem;

  border-radius: 4px;

  background-color: ${props => props.active ? '#ECEFF4' : props.theme.gray50};

  &::after {
    position: absolute;

    right: -1.68rem;
    content: '';

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;

    border-color: ${props => props.active ? `transparent ${props.theme.gray50} transparent transparent` : 'transparent'};
  }

  @media (max-width: 1200px) {
    &::after {
      left: 50%;
      bottom: -2.12rem;

      transform: rotate(90deg);
    }
  }

  img {
    width: 3.25rem;
    height: 3.25rem;

    border-radius: 800px;

    object-fit: cover;
  }
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;

    h3 {
      color : ${props => props.theme.gray800};
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.75rem;
    }
    p {
      color: ${props => props.theme.gray500};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25rem;

      strong {
        color: ${props => props.theme.pink500};
        text-decoration: underline;
        font-weight: 400;
      }
    }
  }
  button {
    
  }
`

export const TestimonialButton = styled.button `
  position: absolute;
    inset: 0;

    background: none;
    border: none;

    cursor: pointer;
  


    &:hover {
      filter: opacity(5%);
      background-color: black;
    }

`