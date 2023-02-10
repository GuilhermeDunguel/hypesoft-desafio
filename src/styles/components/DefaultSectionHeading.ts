import styled from 'styled-components';

export const DefaultSectionHeadingWrapper = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
  position: relative;

  &::after {
    position: absolute;
    bottom: -16px;
    left: calc(50% - (5rem / 2));

    content: '';
    width: 5rem;
    height: 0.1875rem;
    border-radius: 3px;
    background-color: ${props => props.theme.pink500};
  }
`