import { TransactionsContext } from './../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useTransactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return transactions
}

export function useFetchTransactions() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )
  return fetchTransactions
}

export function useCreateTransaction() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createNewTransaction,
  )
  return createTransaction
}
