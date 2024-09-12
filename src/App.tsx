import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

export function App (): JSX.Element {
  return (
    <div className='max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
