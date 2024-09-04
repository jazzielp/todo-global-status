export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TypeTodoList {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export interface TypeTodoForm {
  onAdd: (text: string) => void
}
