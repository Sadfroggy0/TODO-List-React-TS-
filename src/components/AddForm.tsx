import React, {useState} from "react";

export const AddForm = ({addItem}:any) => {
    const [newTask,setNewTask]=useState('')

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        addItem(newTask)
        setNewTask('')

    }

    function handleChange (event:any) {
        setNewTask(event.currentTarget.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className={"border-2 border-indigo-300 rounded-full"}  type={"text"}
                   value={newTask}
                   placeholder={"Write new task"}
                   onChange={handleChange}

            />

            <button type={"submit"}
                    className={'px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 ' +
                'hover:text-white hover:bg-purple-600 hover :border-transparent focus:outline-none' +
                ' focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'}>
                Add Task
            </button>
        </form>
    )
}