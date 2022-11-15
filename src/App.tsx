import React, {useState} from 'react';
import {TaskItem} from "./components/TaskItem"
import {AddForm} from "./components/AddForm"
import {TaskForm} from "./models/TaskForm";

function App() {

    const [counter,setCounter]=useState(1) //id generator :)
    const[items,setItems] = useState<TaskForm[]>([])

    const addItem = (receivedItem:string)=>{
        if (receivedItem !== ''){
            const newItem:TaskForm = {id:counter, name: receivedItem}
            setCounter(counter+1)
            items.push(newItem)
            setItems([...items])
            console.log(items)
        }
    }
    const deleteItem= (id:number) =>{
        setItems([...items.filter((item)=>item.id !== id)])
        // items.splice(id-1,1)
        // setItems([...items])
    }

    return (
        <div className="grid place-content-start md:place-content-center p-5">
            <h1 className="grid place-content-start md:place-content-center">Counter: {items.length}</h1>
            <AddForm  addItem = {addItem} />

            { items.map((item) => {
                return (
                    <TaskItem
                        item = {item}
                        deleteItem = {deleteItem}
                        key = {item.id}

                    ></TaskItem>
                )
            })}
        </div>
    )
}

export default App;
