import styled from 'styled-components';

export const MySelectedWorkCardContainer = styled.div`
  
  color: ${props => props.theme.gray800};
  
  filter: brightness(95%);

  a {
    position: absolute;
    inset: 0;
  }

  transition: 0.2s;

  svg {
    transition: 0.2s;
  }

  button {
    span {
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
        margin-left: 0;
        opacity: 100%;
      }
    }
  }
`

export const MySelectedWorkCardImageWrapper = styled.div`
  position: relative;
  width: 26.5rem;
  height: 20.75rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
  
  img {
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    position: absolute; 
  }
`

export const MySelectedWorkCardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  min-width: 310px;
  
  border-radius: 0 0 8px 8px;
  background-color: ${props => props.theme.gray50};
  padding: 1.5rem;


  p {
    color: ${props => props.theme.gray800};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.25rem;
  }
`

export const ViewProjectButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  color: ${props => props.theme.gray800};
  overflow: hidden;

  background: none;
  border: none;

  span {
    opacity: 0;
    color: ${props => props.theme.pink500};
    margin-left: -8rem;
    font-size: 1rem;
    font-weight: 600;
  }
`