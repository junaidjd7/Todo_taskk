//   drag and drop using libarary
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
// import './App.css'

import TodoContainer from './TodoContainer';


function TodoDragable() {

    const [model, setmodel] = useState({
        title: "",
        description: "",
        id: 0
    })
    const [state, setState] = useState({
        "todo": {
            title: "Todo",
            items: []
        },
        "pending": {
            title: "Pending",
            items: []
        },
        "in-progress": {
            title: "In Progress",
            items: []
        },
        "done": {
            title: "Completed",
            items: []
        }
    })

    const handleDragEnd = ({ destination, source }) => {
        console.log("state ", state, " source ", source)
        if (!destination) {
            return
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return
        }

        // Creating a copy of item before removing it from state
        const itemCopy = { ...state[source.droppableId].items[source.index] }

        setState(prev => {
            prev = { ...prev }
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)

            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
    }

    const handleChange = (e) => {
        setmodel({ ...model, [e.target.name]: e.target.value, id: v4() })
        
    }

    const handleADD = () => {
        setState((prevstate)=>{
            // console.log('abc',prevstate)
            return {
                ...prevstate,
                todo: {
                    title: "Todo",
                    items: [...prevstate.todo.items ,model ]
                }
            }
        })
        setmodel({ title: "", description: "", id: 0 })
    }



    return (
        <div className="container-fluid">
           <TodoContainer handleChange={handleChange} handleADD={handleADD} moddel={model} title={model.title} description={model.description}/>

            <div className='row'>
            <DragDropContext onDragEnd={handleDragEnd}>
                {_.map(state, (data, key) => {
                    return (
                        <div key={key} className={"col-3"}>
                            <h3>{data.title}</h3>
                            <Droppable droppableId={key}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className={"droppable-col"}
                                        >
                                          
                                            {data.items.map((el, index) => {
                                                return (
                                                    <Draggable key={el.id} index={index} draggableId={el.id}>
                                                        {(provided, snapshot) => {
                                                            console.log(snapshot)
                                                            return (
                                                                 <div
                                                                    className={`item ${snapshot.isDragging && "dragging"}`}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <b> {el.title}: </b>
                                                                    {el.description}
                                                                   <button onClick={()=>handleDelete(el.id,data.title.toLowerCase())} className='btn btn-danger'>Delete</button>
                                                                </div> 
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                    )
                })}
            </DragDropContext>
            </div>
           
        </div>
    );
}

export default TodoDragable;

