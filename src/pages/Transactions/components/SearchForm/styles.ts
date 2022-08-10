import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;

  input {
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    flex: 1;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme.white};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    width: 7rem;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    transition: all 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      justify-content: center;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
