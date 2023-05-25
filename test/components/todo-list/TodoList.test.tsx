import TodoList from '@/components/todo-list/TodoList'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Test TodoList', () => {
  it('할 일을 입력하고 추가 버튼을 누르면 할 일 목록에서 보여준다.', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const textField = screen.getByRole('textbox')
    const addButton = screen.getByRole('button', { name: '추가' })

    await user.type(textField, '테스트중이에요')

    await waitFor(() => {
      addButton.click()
    })

    const todoText = screen.getByText('테스트중이에요')

    expect(todoText).toBeInTheDocument()
  })

  it('할 일을 클릭하면 체크박스가 체크가 된다.', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const textField = screen.getByRole('textbox')
    const addButton = screen.getByRole('button', { name: '추가' })

    await user.type(textField, '테스트중이에요')

    await waitFor(() => {
      addButton.click()
    })

    const todoText = screen.getByText('테스트중이에요')

    await user.click(todoText)
    const checked = screen.getByRole('checkbox')

    expect(checked).toBeEnabled()
  })

  it('삭제 버튼을 누르면 할 일 목록에서 제거되어 화면에 보여지지 않는다.', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const textField = screen.getByRole('textbox')
    const addButton = screen.getByRole('button', { name: '추가' })

    await user.type(textField, '테스트중이에요')

    await waitFor(() => {
      addButton.click()
    })

    const todoText = screen.getByText('테스트중이에요')
    const deletedButton = screen.getByRole('button', { name: '삭제' })

    await user.click(deletedButton)

    expect(todoText).not.toBeInTheDocument()
  })
})
