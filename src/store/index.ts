import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/slice'

const saveLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__todo__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
