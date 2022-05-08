import React from 'react'

const TodoContainer = ({handleChange,handleADD,description,title}) => {
  return (
    <div>
       <h2 className='text-center'> Todos Dragable</h2>
            <div className='row justify-content-center mb-5'>
                <div className='col-6'>
                    <div className='form-row align-items-end'>
                        <div className='col-2'>
                            <label>Title:</label>
                            <input type="text" className='form-control' value={title} name="title" onChange={handleChange} />
                        </div>
                        <div className='col-2'>
                            <label>Description:</label>
                            <input type="text" className='form-control' value={description} name="description" onChange={handleChange} />
                        </div>
                        <div className='col-2'>
                            <button onClick={handleADD} className='btn btn-success'>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TodoContainer
