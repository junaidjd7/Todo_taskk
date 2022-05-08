import React, { useState } from 'react'
import InputFields from './InputFields'

function TodoTaskMaker() {
    const dropDownValues = [{ name: 'Plesae Select' }, { name: 'done' }, { name: 'pending' }, { name: 'in-progress' }]
    const [dropdown, setDropdown] = useState(dropDownValues)
    // const [filter, setfilter] = useState("");

    const modal = { title: '', description: '', dropDownValues: '' }

    const [state, setState] = useState(modal)
    const [data, setData] = useState([])
    const [searchInput, setsearchInput] = useState("");
    const [filter, setfilter] = useState("");
    const [message, setmessage] = useState("")
    const [validation, setValidation] = useState({
        titleValidation: false,
        descriptionValidation: false,
        typeValidation: false
    })
    const [update, setUpdate] = useState(false)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!state.title || !state.description || !state.dropDownValues)
        if (state.title === '') {
            setValidation((prevState) => ({ ...prevState, titleValidation: true }))
        }
        else if (state.description === '') {
            setValidation((prevState) => ({ ...prevState, descriptionValidation: true }))
        }
        else if (state.dropDownValues === '') {
            setValidation((prevState) => ({ ...prevState, typeValidation: true }))
            
        }

        // setmessage('hjcxcc')



        else {
            setValidation({ ...validation, titleValidation: false, descriptionValidation: false, typeValidation: false })

            setData([...data, { ...state, id: data.length }])
            setfilter([...data, { ...state, id: filter.length }])
            setState({ title: '', description: '', dropDownValues: '' })
        }




        // setmessage('hjcxcc')
        // console.log('data',data);
    };
    const handleType = (e) => {
        setsearchInput(e.target.value);

        let a = [...filter];
        let filteredData = a.filter((el) => {
            if (searchInput.length > 0) {
                // console.log('if');
                return el.dropDownValues.toLowerCase().includes(e.target.value.toLowerCase());
            } else {
                return el.dropDownValues
                // console.log('else');

            }
        });
        setData(filteredData);
    }
    const handleEdit = (row) => {
        console.log('row', row);
        setState(row)
        setUpdate(true)

    }
    const handleDelete = (id) => {

        let cb = [...filter]
        let cc = cb.filter((el) => el.id !== id)
        setfilter(cc)
        setData(cc)

    };

    // const handleDelete = (index) => {
    //     // console.log('id',id);
    //     let ab = [...data]
    //     ab.splice(index, 1)
    //     setData([...ab])
    // };

    const handleUpdate = (id) => {
        const { title, description, dropDownValues } = state
        // console.log('el',el)
        let a = [...data]
        let updatedarray = a.map((el) => {
            if (el.id === id) {
                return { ...el, title, description, dropDownValues }
            } else {
                return el
            }
        })
        // let updatedarray = a.map(el => (el.id === id ? ( { ...state, title, description, dropDownValues }) : el))

        //  console.log('el',el);
        setData(updatedarray)
    }

    return (
        <>
            <div className='container fluid'>
                <InputFields searchInput={searchInput} handleType={handleType} handleChange={handleChange} title={state.title}
                    description={state.description} dropDownValues={state.dropDownValues} handleSubmit={handleSubmit} dropdown={dropdown}
                    message={message} titleValidation={validation.titleValidation} descriptionValidation={validation.descriptionValidation} typeValidation={validation.typeValidation} />

                <div className='row'>
                    <table >
                        <thead className='col-3'>
                            <tr>
                                <th>title</th>
                                <th>description</th>
                                <th>type</th>

                            </tr>
                        </thead>

                        <tbody >
                            {data.map((row, index) => {
                                return (
                                    // console.log('row',row)
                                    <>
                                        <tr>
                                            <td>{row.title}</td>
                                            <td>{row.description}</td>
                                            <td>{row.dropDownValues}</td>
                                            <td> <button onClick={() => handleDelete(row.id)}>Delete</button>
                                                {update ?
                                                    <button onClick={() => handleUpdate(row.id)}>update</button> :
                                                    <button onClick={() => handleEdit(row)}>Edit</button>

                                                }</td>

                                        </tr>


                                    </>)
                            })}

                        </tbody>

                    </table>
                </div>

            </div>

        </>

    )
}

export default TodoTaskMaker

