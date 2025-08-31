import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const Create = (props) => {
    const todo = props.todo
    const settodo = props.settodo
    const [task, settask] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            id: nanoid(),
            task: task,
            isCompleted: false,
        }
        console.log(newTodo);
        let copyTask = [...todo];
        copyTask.push(newTodo);
        settodo(copyTask);
        // settodo([...todo ,newTodo])
        settask("")
    }
    return (
        <div className='p-10 mx-2 w-[70%]'>
            <h1 className='text-6xl font-light'>Set <span className='text-amber-700'>Reminders</span> for <br />tasks</h1>
            <br />
            <form onSubmit={submitHandler}>
                <input
                    className='w-full text-4xl border-b outline-none py-[7px] font-thin'
                    onChange={(e) => settask(e.target.value)}
                    value={task}
                    type="text" placeholder='title' />
                <br />
                <br />
                <button className='my-5 hover:cursor-pointer rounded-[5px] font-light text-2xl px-12 py-4 border'>Create Todo</button>
            </form>
        </div>
    )
}

export default Create
