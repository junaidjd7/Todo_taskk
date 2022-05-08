import React, { useState } from 'react'

const TodoTask = () => {
    const [text, setText] = useState('') 
    const [item, setAllitem] = useState([])
    const [update, setUpdate] = useState(false)


    const handleChange = (e, name) => {
        if (e.target.name === 'text') {
            return setText(e.target.value)
        }

    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAllitem([...item, { text, id: item.length }])

    };
    const handleAllDelete = () => {
        setAllitem([])
    };
    const handleDelete = (id) => {
        console.log(id);
        let ab = [...item]
        return setAllitem(ab.filter((el) => el.id !== id))
    };
    const handleEdit = (row) => {

        setText(row.text)
        
        setUpdate(true)
    }
    const handleUpdate = (id) => {
        let a = [...item]
        let updatedarray = a.map((ele) => {
            if (ele.id === id) {
                return { ...ele, text }
            }
            else {
                return ele
            }
        }
        )
        setAllitem(updatedarray)
        setText('')
        
    }


    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <label>addThings</label>
                    <input
                        type='text'
                        name='text'
                        value={text}
                        onChange={(e) => handleChange(e, 'text')} />
                </div>


                <div className='col-2 mt-4'>
                    <button onClick={handleAdd}>add</button>
                    <button onClick={handleAllDelete}>Alldelete</button>
                </div>
                {
                    <div className=''>
                        {item.map((el, index) => {
                            return (

                                <div>
                                        <li>{el.text}</li>
                                        
                                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                                    {update ?
                                        <button onClick={() => handleUpdate(el.id)}>update</button> :
                                        <button onClick={() => handleEdit(el)}>Edit</button>

                                    }


                                </div>)
                        })}

                    </div>
                }

            </div> 
        </div>


    )
}

export default TodoTask
