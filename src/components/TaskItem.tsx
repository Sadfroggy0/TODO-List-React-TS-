import { useState } from "react";
import {ITask} from "../models/ITask";

export const TaskItem = ( {item, deleteItem} : {item:ITask, deleteItem:any} ) => {

    const [seeDetails,setSeeDetails]=useState(false)

    return(
        <>
            <div className={"pt-2"}>
                <div className={'p-2 border-solid border-2 border-indigo-300'} key={item.id} >
                    <div className="item-text relative">

                        ({item.id}) {item.name}

                        <button className={'w-1/4 absolute bottom-0 right-20' +
                            ' text-purple-600 font-semibold rounded-full border border-purple-200' +
                            '                hover:text-white hover:bg-green-600 hover :border-transparent focus:outline-none' +
                            '                focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'}
                                onClick = {()=>setSeeDetails(value => !value)}
                                >
                                    +
                        </button>

                        <button className={'w-1/3 absolute bottom-0 right-0' +
                                            ' text-purple-600 font-semibold rounded-full border border-purple-200' +
                                            '                hover:text-white hover:bg-red-600 hover :border-transparent focus:outline-none' +
                            '                focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'}
                                onClick={()=>deleteItem(item.id) }>
                            Done!
                        </button>

                        
                    </div>
                    
            
                </div>
            </div>
            {seeDetails && 
                    <div>
                        <p>PLACEHOLDER TEXT FOR DETAILS</p>
                    </div>
            }

        </>
    )
}