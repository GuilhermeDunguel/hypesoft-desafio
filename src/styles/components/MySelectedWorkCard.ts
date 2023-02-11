import styled from 'styled-components';

export const MySelectedWorkCardContainer = styled.div`
  
  color: ${props => props.theme.gray800};
  
  transition: filter 0.2s;
  
  filter: brightness(95%);

  a {
    position: absolute;
    inset: 0;
  }

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

  background: none;
  border: none;
  
  overflow: hidden;

  span {
    display: none;
    color: ${props => props.theme.pink500};
    margin-left: -7.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
`