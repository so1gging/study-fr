import { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { TodoItemType } from '@/libs/utils/types'

export default function TodoForm({ onAdd }: { onAdd: (item: TodoItemType) => void }) {
  const [value, setValue] = useState('')

  const handleAdd: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    onAdd({
      title: value,
      checked: false,
      deleted: false,
    })
    setValue('')
  }

  return (
    <StyledTodoForm>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button name="추가" disabled={value.length === 0} onClick={handleAdd}>
        추가
      </button>
    </StyledTodoForm>
  )
}

const StyledTodoForm = styled.div`
  display: flex;
  align-items: center;
`
