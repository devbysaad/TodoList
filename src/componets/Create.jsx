import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Create = (props) => {
    const todo = props.todo
    const settodo = props.settodo

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const submitHandler = (data) => {
        data.id = nanoid(),
        console.log(data);

        const copy = [...todo];
        copy.push(data);
        settodo(copy);
        toast.success('Todo Created')
        reset()
    }
    
    return (
        <div className='p-10 mx-2 w-[70%]'>
            <h1 className='text-6xl font-light'>Set <span className='text-amber-700'>Reminders</span> for <br />tasks</h1>
            <br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("title", {
                        required: "title can not be empty",

                    })}
                    className='w-full text-4xl border-b outline-none py-[7px] font-thin'
                    type="text" placeholder='title' />
                    <small>{errors?.title?.message}</small>
                <br />
                <br />
                <button className='my-5 hover:cursor-pointer rounded-[5px] font-light text-2xl px-12 py-4 border'>Create Todo</button>
            </form>
        </div>
    )
}

export default Create
