import React from 'react'
import { useState, useEffect } from 'react'
import "./Form.css"
import Tsk from './Tsk'



function Form () {
    let [taskNameInput, SettingTaskNameInput] = useState("")
    let [descriptionInput, SettingDescriptionInput] = useState("")
    let [taskOrTasksToDo, settingTask] = useState([])

    useEffect(() => {
        let saved = localStorage.getItem("x")
        if(saved) {
            settingTask(JSON.parse(saved))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("x", JSON.stringify(taskOrTasksToDo))
    }, [taskOrTasksToDo])


    function TaskNameInputAdding (event) {
       SettingTaskNameInput(event.target.value)
       
    }

    function DescriptionAdding (event) {
        SettingDescriptionInput(event.target.value)
        
    }

    function addingTask() {
        let task = {
            id: taskOrTasksToDo.length === 0 ? 1 : taskOrTasksToDo[taskOrTasksToDo.length - 1].id + 1,
            taskName: taskNameInput,
            taskDescription: descriptionInput,
            completed: false
        }
        
        settingTask(task.taskName !== "" ? [...taskOrTasksToDo, task] : taskOrTasksToDo);
        

        document.getElementById("task-name").value = ""
        document.getElementById("task-description").value = ""

        
    }

    function cmpltd(id) {
        settingTask(taskOrTasksToDo.map((x) => {
            if (x.id === id) {
                return {...x, completed: true}
            } else {
                return x;
            }
        }))
    }

    function dlt (id) {
        settingTask(taskOrTasksToDo.filter((x) => {
            return x.id !== id
        }))
    }


    return <div className='div-form'>
        <h1 className='h1-in-form'>Add Task</h1>
        <input id='task-name' onChange={TaskNameInputAdding} className="input-g" type='text' placeholder='Task Name' /> <br/>

        <textarea id='task-description' onChange={DescriptionAdding} className="description-g" type='text' placeholder='Task Description' /><br/>

        <button onClick={addingTask} className='button-g'>+</button>

        <div>{taskOrTasksToDo.slice().reverse().map((x) => {
            return <Tsk dlt = {dlt} completed = {x.completed} id = {x.id} cmpltd = {cmpltd} taskName = {x.taskName} descriptionField={x.taskDescription}/>
        })}</div>
    </div>
}

export default Form