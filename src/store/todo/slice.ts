import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    text: 'todo',
    completed: true
  },
  {
    id: 2,
    text: 'todo',
    completed: true
  }
]

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
})

export default todoSlice.reducer
