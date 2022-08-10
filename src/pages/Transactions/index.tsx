import { useTransactions } from '../../hooks/useTransactions'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { currencyFormatter, dateFormatter } from '../../utils/formatter'
import { PricingHighlight, SummaryTable, TransactionsContainer } from './styles'

export function Transactions() {
  const transactions = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <SummaryTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PricingHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {currencyFormatter.format(transaction.price)}
                    </PricingHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </SummaryTable>
      </TransactionsContainer>
    </div>
  )
}
