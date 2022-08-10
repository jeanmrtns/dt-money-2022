import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  min-width: 40rem;

  background-color: ${(props) => props.theme['gray-800']};
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 480px) {
    max-width: 100vw;
    width: 100%;

    top: 15%;
    bottom: 0%;
    left: 0.05%;
    transform: translate(0%, 0%);
  }

  border-radius: 6px;
  padding: 3rem 2.5rem;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      padding: 1rem 0.75rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme.white};

      &::placeholder {
        color: ${(props) => props.theme['gray-300']};
      }
    }

    button[type='submit'] {
      padding: 1rem;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};
      border: 0;
      border-radius: 6px;
      transition: filter 0.2s;
      font-weight: bold;
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  color: ${(props) => props.theme['gray-500']};
  background-color: transparent;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked'] {
    &:hover {
      background-color: ${(props) => props.theme['gray-600']};
    }
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
  }
`
