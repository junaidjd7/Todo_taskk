import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
const Item = () => {
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
}

export default Item


