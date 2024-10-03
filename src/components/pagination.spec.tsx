import { render } from '@testing-library/react'
import { Pagination } from './pagination'

describe('Pagination', () => {
  it('Should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination 
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('Should be able to navigate to the next page', () => {
    const wrapper = render(
      <Pagination 
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })
})