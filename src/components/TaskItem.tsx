import {TaskForm} from "../models/TaskForm";


export const TaskItem = ( {item,deleteItem} : {item:TaskForm, deleteItem:any} ) => {
    return(
        <div className={"pt-2"}>
            <div className={'p-2 border-solid border-2 border-indigo-300'} key={item.id} >
                <div className="item-text relative">
                    ({item.id}) {item.name}
                    <button className={'px-10 absolute bottom-0 right-0' +
                        ' text-purple-600 font-semibold rounded-full border border-purple-200' +
                        '                hover:text-white hover:bg-red-600 hover :border-transparent focus:outline-none' +
                        '                focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'}
                            onClick={()=>deleteItem(item.id) }>
                        Done!
                    </button>
                </div>

            </div>
        </div>
    )
}