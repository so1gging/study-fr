import { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'

export default function TodoForm() {
  const [value, setValue] = useState('')

  const handleAdd: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setValue('')
  }

  return (
    <StyledTodoForm>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length === 0} onClick={handleAdd}>
        추가
      </button>
    </StyledTodoForm>
  )
}

const StyledTodoForm = styled.div`
  display: flex;
  align-items: center;
`
