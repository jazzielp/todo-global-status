import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    text: 'todo',
    completed: true
  },
  {
    id: '2',
    text: 'todo',
    completed: false
  }
]

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
    deleteTodo: (state, action: PayloadAction<TodoPayloadID>) => {
      const { id } = action.payload
      const newTodos = state.filter((todo) => todo.id !== id)
      return [...newTodos]
    },
    completedTodo: (state, action: PayloadAction<TodoPayloadID>) => {
      const { id } = action.payload
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    }
  }
})

export default todoSlice.reducer
export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions
