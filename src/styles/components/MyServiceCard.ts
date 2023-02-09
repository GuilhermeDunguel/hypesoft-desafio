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
  filter: brightness(90%);

  transition: filter 0.2s;
  &:hover{
    filter: brightness(100%);

    svg {
      color: ${props => props.theme.pink500};
    }

    button {
      span {
        display: block;
        margin-left: 0;
      }
    }
  }
`

export const MyServiceCardFooter = styled.div`
  min-width: 18rem;
  max-width: 19.5rem;

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
    
    overflow: hidden;

    span {
      display: none;
      color: ${props => props.theme.pink500};
      margin-left: -120px;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`

export const DiscussNowLink = styled.a`
  position: absolute;
  inset: 0;
`