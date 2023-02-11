import styled from "styled-components";

interface ButtonProps {
  secondary?: boolean
  formIsDirty?: boolean
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;

  gap: 0.5rem;
  
  padding: 0 2rem;

  color: ${props => !props.secondary ?  props.theme.gray50 :  props.theme.gray900};
  font-size: 1rem;
  font-weight: 600;
  line-height: 3.5rem;

  border: none;
  border-radius: 5px;
  
  background-color: ${props => !props.secondary ? props.theme.purple500 : props.theme.gray50};
  
  transition: filter 0.2s;
  cursor: pointer;

  a {
    position: absolute;
    inset: 0;
  }

  &:hover {
    filter: brightness(90%);
  }
`