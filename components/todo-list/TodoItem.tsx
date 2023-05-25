import styled from 'styled-components'
import { TodoItemType } from '@/libs/utils/types'

interface TodoItemProps {
  title: TodoItemType['title']
  checked: TodoItemType['checked']
  deleted: TodoItemType['deleted']
  onChecked: (item: TodoItemType) => void
  onDeleted: (item: TodoItemType) => void
}
export default function TodoItem(props: TodoItemProps) {
  const todo = {
    title: props.title,
    checked: props.checked,
    deleted: props.deleted,
  }
  return (
    <StyledTodoItem checked={todo.checked}>
      <label>
        <input type="checkbox" checked={props.checked} onChange={() => props.onChecked(todo)} />
        <span onClick={() => props.onChecked(todo)}>{props.title}</span>
      </label>
      <button onClick={() => props.onDeleted(todo)} name="삭제">
        삭제
      </button>
      <button>수정</button>
    </StyledTodoItem>
  )
}

const StyledTodoItem = styled.div<{ checked: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  & span {
    ${({ checked }) => checked && `text-decoration: line-through`};
  }
`
