import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { TodoWithId } from '../../types/todo'

const initialState: TodoWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__todo__')
  if (persistedState !== null && persistedState !== '') {
    return JSON.parse(persistedState).todos
  }
  return []
})()

interface TodoPayloadAction {
  text: string
}

interface TodoPayloadID {
  id: string
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoPayloadAction>) => {
      const id = crypto.randomUUID()
      const { text } = action.payload
      return [...state, { id, completed: false, text }]
    },
    deleteTodo: (state: TodoWithId[], action: PayloadAction<TodoPayloadID>) => {
      const { id } = action.payload
      const newTodos = state.filter((todo) => todo.id !== id)
      return [...newTodos]
    },
    completedTodo: (state: TodoWithId[], action: PayloadAction<TodoPayloadID>) => {
      const { id } = action.payload
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    }
  }
})

export default todoSlice.reducer
export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions
