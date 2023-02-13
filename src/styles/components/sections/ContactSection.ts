
import styled from 'styled-components';

export const ContactSectionContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  height: 33.5rem;

  @media (max-width: 1200px) {
    height: 100%;
    flex-direction: column;

    .ContactFormContainer, .ContactInfosContainer {
      width: 100%;
    }
  }

  .ContactFormContainer, .ContactInfosContainer {
    padding: 3rem;
    height: 100%;

    color: ${props => props.theme.gray800};
    
    border-radius: 8px;
    background-color: ${props => props.theme.gray50};

    h3 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.5rem;
    }
  }
`

export const ContactFormContainer = styled.form`
  flex: 1;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    padding: 14px 20px;

    width: 100%;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.gray100};

    resize: none;

    ::placeholder {
      color: ${props => props.theme.gray500};
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input {
      flex: 1;
    }
  }
`

export const ContactInfosContainer = styled.div`
  position: relative; 

  width: 33.5rem;

  &::after {
    content: url('/PinkDots.svg');
    position: absolute;
    top: -2rem;
    right: -4.75rem;

    width: 9.5rem;
    height: 4.25rem;

    overflow: hidden;
  }

  @media (max-width: 1200px) {
    &::after {
      top: -1rem;
      right: -1rem;
    }
  }
`

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;

  margin-top: 24px;

  .ContactInfoDiv {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    div {
      padding: 1.5rem;
      color: ${props => props.theme.pink500};
      line-height: 0;
    
      border-radius: 5000px;
      background-color: ${props => props.theme.gray100};
      
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    p {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.75rem;
    }
  }
`

export const SocialButtonsWrapper = styled.div`
    display: flex;
    gap: 0.75rem;

    a {
      padding: 0.875rem;

      color: ${props => props.theme.gray800};
      line-height: 0;
      
      border: 1px solid ${props => props.theme.gray100};
      border-radius: 500px;
      background-color: ${props => props.theme.gray50};

      transition: 0.2s;

      &:hover {
        color: ${props => props.theme.gray50};
        background-color: ${props => props.theme.purple500};
      }
    }
`