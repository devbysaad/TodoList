import React, { useState } from 'react'
// import { nanoid  } from 'nanoid'
import Create from './componets/Create'
import Read from './componets/Read'

const App = () => {
  const [todo, settodo] = useState([
  ])
  return (
    <>
    <div className='w-screen h-screen bg-gray-800 p-10 text-white flex'>
     <Create todo={todo} settodo={settodo} />
     <Read todo={todo} settodo={settodo} />
     </div>
    </>
  )
}

export default App
