export interface Todo {
  text: string
  completed: boolean
}

export interface TodoWithId extends Todo {
  id: string
}

export interface TodoActions {
  addNewTodo: (text: string) => void
  removeTodo: (id: string) => void
  completerTodo: (id: string) => void
}
