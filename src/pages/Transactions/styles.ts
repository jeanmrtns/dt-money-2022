import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.25rem;
`

export const SummaryTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PricingHighlightProps {
  variant: 'income' | 'outcome'
}

export const PricingHighlight = styled.span<PricingHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
