'use client'

import { useState } from 'react'
import { TodoItemType } from '@/libs/utils/types'
import styled from 'styled-components'
import TodoForm from '@/components/todo-list/TodoForm'
import TodoItem from '@/components/todo-list/TodoItem'
export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>([])

  const handleAdd = (todo: TodoItemType) => setTodos((prev) => [...prev, todo])

  const handleTodo = (todo: TodoItemType, type: 'deleted' | 'checked') =>
    setTodos((prev) => [...prev.filter((i) => i.title !== todo.title), { ...todo, [type]: true }])

  const handleDeleted = (todo: TodoItemType) => handleTodo(todo, 'deleted')
  const handleChecked = (todo: TodoItemType) => handleTodo(todo, 'checked')

  return (
    <StyledTodoList>
      <TodoForm onAdd={handleAdd} />
      {todos
        .filter((i) => !i.deleted)
        .map((todo, i) => (
          <TodoItem
            key={`${i}-${todo.title}`}
            title={todo.title}
            checked={todo.checked}
            deleted={todo.deleted}
            onChecked={handleChecked}
            onDeleted={handleDeleted}
          />
        ))}
    </StyledTodoList>
  )
}

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
`
