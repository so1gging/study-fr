import { render, screen } from '@testing-library/react'
import TodoForm from '@/components/todo-list/TodoForm'
import userEvent from '@testing-library/user-event'

describe('Test TodoForm', () => {
  it('할 일을 입력해야 추가 버튼이 활성화된다.', async () => {
    const fn = jest.fn()
    render(<TodoForm onAdd={fn} />)
    const user = userEvent.setup()
    const textField = screen.getByRole('textbox')
    const addButton = screen.getByRole('button')

    expect(addButton).toBeDisabled()

    await user.type(textField, '테스트')

    expect(addButton).toBeEnabled()
  })
  it('할 일을 입력하고 추가 버튼을 누르면 할 일을 입력받는 창이 빈 값이 된다.', async () => {
    const fn = jest.fn()
    render(<TodoForm onAdd={fn} />)
    const user = userEvent.setup()
    const textField = screen.getByRole('textbox')
    const addButton = screen.getByRole('button')

    await user.type(textField, '테스트')

    await user.click(addButton)

    expect(textField).toHaveValue('')
  })
})
