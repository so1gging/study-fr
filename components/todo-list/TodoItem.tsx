import styled from 'styled-components'
import { TodoItemType } from '@/libs/utils/types'

interface TodoItemProps {
  title: TodoItemType['title']
  checked: TodoItemType['checked']
  deleted: TodoItemType['deleted']
  onChange: () => void
}
export default function TodoItem(props: TodoItemProps) {
  return (
    <StyledTodoItem>
      <label>
        <input type="checkbox" checked={props.checked} onChange={props.onChange} />
        <span>{props.title}</span>
      </label>
      <button>삭제</button>
      <button>수정</button>
    </StyledTodoItem>
  )
}

const StyledTodoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
