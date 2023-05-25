import { TodoItemType } from '@/libs/utils/types'
import { render, screen } from '@testing-library/react'
import TodoItem from '@/components/todo-list/TodoItem'
describe('Test TodoItem', () => {
  it('할 일과 삭제/수정 버튼을 보여준다', function () {
    const item: TodoItemType = {
      title: '테스트중이에요~',
      checked: false,
      deleted: false,
    }

    const change = jest.fn()

    render(<TodoItem {...item} onDeleted={change} onChecked={change} />)
    const todoText = screen.getByText(item.title)
    const deletedBtn = screen.getByRole('button', { name: '삭제' })
    const updateBtn = screen.getByRole('button', { name: '수정' })

    expect(todoText).toBeInTheDocument()
    expect(deletedBtn).toBeInTheDocument()
    expect(updateBtn).toBeInTheDocument()
  })
})
