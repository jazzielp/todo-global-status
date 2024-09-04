import { useState } from 'react'
import { TypeTodoForm } from '../types/todo'
import { PlusIcon } from 'lucide-react'

export function TodoForm ({ onAdd }: TypeTodoForm): JSX.Element {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const trim = text.trim()
    if (trim !== '') {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex space-x-2 mb-4'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Agregar nueva tarea'
          className='flex-grow p-2 border rounded'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          <PlusIcon size={24} />
        </button>
      </form>
    </>
  )
}
