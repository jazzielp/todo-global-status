import { useState } from 'react'
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'
import { Todo } from './types/todo'

export function App (): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string): void => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}
