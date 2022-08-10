import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.25rem;
  overflow: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  border-radius: 6px;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme['gray-600']};

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  strong {
    display: block;
    margin-top: 1.125rem;
    font-size: 2rem;

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`
