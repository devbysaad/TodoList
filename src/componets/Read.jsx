import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { todocontext } from '../Wrapper'
const Read = () => {
  
const [todo, settodo] = useContext(todocontext)

  const DeleteHandler = (id) => {
    const filterTodo = todo.filter((todos) => todos.id != id)
    settodo(filterTodo)
    toast.error('Your Todo has been deleted')
  }
  const renderTodo = todo.map(todos => {
    return <li className='flex mb-4 font-thin justify-between text-3xl items-center list-none rounded p-5 bg-gray-900 ' key={todos.id}>
      <span> {todos.title}</span>
      <button className='text-red-600 text-xl font-thin hover:cursor-pointer'
        onClick={() =>
          DeleteHandler(todos.id)
        }>Delete</button></li>

  })

  return (
    <div className=''>
      <h1 className='text-6xl font-light flex p-10'><span className='text-pink-700'>Pending </span> Todos</h1>
      <h2>{renderTodo}</h2>

    </div>
  )
}

export default Read
