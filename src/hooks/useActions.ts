import { useAppDispatch } from './useStore'
import { addTodo, deleteTodo, completedTodo } from '../store/todo/slice'
import { TodoActions } from '../types/todo'

export function useTodoActions (): TodoActions {
  const dispatch = useAppDispatch()
  const addNewTodo = (text: string): void => {
    dispatch(addTodo({ text }))
  }
  const removeTodo = (id: string): void => {
    dispatch(deleteTodo({ id }))
  }

  const completerTodo = (id: string): void => {
    dispatch(completedTodo({ id }))
  }

  return { addNewTodo, removeTodo, completerTodo }
}
