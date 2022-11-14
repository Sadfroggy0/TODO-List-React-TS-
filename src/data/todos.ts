import {TaskForm} from "../models/TaskForm";

// function  readFile(fileName:Blob):TaskForm[]{
//     const temp:TaskForm[] = []
//     const reader = new FileReader();
//
//     reader.readAsText(fileName);
//     reader.onload = () => {
//         temp.push( reader.result.toString().split(','))
//
//     };
//     return  temp
// }

export const list :TaskForm[]= [
    {id:1, name:'todo1'},
    {id:2, name:'todo3'},
    {id:3, name:'todo3'},
    {id:4, name:'todo4'},
]

const counter: number = list.length;