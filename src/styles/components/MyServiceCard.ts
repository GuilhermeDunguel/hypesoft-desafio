import styled from "styled-components";

export const MyServiceCardContainer = styled.div`
  position: relative;

  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 6.25rem;

  padding: 2rem;

  color: ${props => props.theme.gray800};
  border-radius: 10px;
  background-color: ${props => props.theme.gray50};
  filter: brightness(95%);

  transition: 0.2s;

  svg {
    transition: 0.2s;
  }

  button {
    span {
      opacity: 0%;
      display: block;
      transition: 0.2s;
    }
  }

  &:hover{
    filter: brightness(100%);

    svg {
      color: ${props => props.theme.pink500};
    }

    button {
      span {
        opacity: 100%;
        color: ${props => props.theme.pink500};
        margin-left: 0;
      }
    }
  }
`

export const MyServiceCardFooter = styled.footer`
  min-width: 15rem;
  max-width: 15rem;

  overflow: hidden;

  p {

    position: relative;

    display: block;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;

    max-width: 12.5rem;
    
    &::after {
      position: absolute;
      bottom: -1rem;
      left: 0;

      content: '';
      width: 5rem;
      height: 0.1875rem;
      border-radius: 3px;
      background-color: ${props => props.theme.pink500};
      filter: opacity(30%);
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 2.6875rem;
    
    color: ${props => props.theme.gray800};

    background: none;
    border: none;
    
    span {
      color: ${props => props.theme.gray800};
      margin-left: -7.5rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`

export const DiscussNowLink = styled.a`
  position: absolute;
  inset: 0;
`