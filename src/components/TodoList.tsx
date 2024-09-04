import { TypeTodoList } from '../types/todo'
import { TrashIcon, CheckIcon } from 'lucide-react'
import { useSelector } from 'react-redux'

export function TodoList ({ todos, onToggle, onDelete }: TypeTodoList): JSX.Element {
  const reduxTodos = useSelector((state) => state.todos)
  console.log('🚀 ~ TodoList ~ reduxTodos:', reduxTodos)
  return (
    <ul className='space-y-2'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-2 rounded ${
          todo.completed ? 'bg-green-100' : 'bg-white'
        }`}
        >
          <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          <div>
            <button
              onClick={() => onToggle(todo.id)}
              className='p-1 mr-2 text-green-600 hover:bg-green-100 rounded'
            >
              <CheckIcon size={18} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className='p-1 text-red-600 hover:bg-red-100 rounded'
            >
              <TrashIcon size={18} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
