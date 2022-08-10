import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFetchTransactions } from '../../../../hooks/useTransactions'
import { Spinner } from '../../../../styles/global'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useFetchTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormData) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Spinner />
        ) : (
          <>
            <MagnifyingGlass size={20} />
            Buscar
          </>
        )}
      </button>
    </SearchFormContainer>
  )
}
