import React, { useState } from 'react'
import InputFields from './InputFields'
// import Output from './Output';
// import Outputt from './Outputt'
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';


function TodoTaskMaker() {
    const dropDownValues = [{ name: 'Plesae Select' }, { name: 'done' }, { name: 'pending' }, { name: 'in-progress' }]
    const [dropdown, setDropdown] = useState(dropDownValues)

    const modal = { title: '', description: '', dropDownValues: '' }

    const [state, setState] = useState(modal)
    const [data, setData] = useState([])
    const [searchInput, setsearchInput] = useState("");
    const [filter, setfilter] = useState("");

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
        if (!state.title && !state.description && !state.dropDownValues)
            setValidation((prevState) => ({ ...prevState, typeValidation: true, titleValidation: true, descriptionValidation: true }))
        else if (!state.title) {
            setValidation((prevState) => ({ ...prevState, titleValidation: true, descriptionValidation: false, typeValidation: false }))
        }
        else if (!state.description) {
            setValidation((prevState) => ({ ...prevState, descriptionValidation: true, titleValidation: false, typeValidation: false }))
        }
        else if (!state.dropDownValues) {
            setValidation((prevState) => ({ ...prevState, typeValidation: true, titleValidation: false, descriptionValidation: false }))
        }
        else {

            setData([...data, { ...state, id: data.length }])
            setfilter([...data, { ...state, id: filter.length }])
            setState({ title: '', description: '', dropDownValues: '' })
        }

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
        // console.log('row', row);
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
                // console.table('el',el.id);
                // console.log('el',id);
                return { ...el, title, description, dropDownValues }
            } else {
                return el
            }
        })
        // let updatedarray = a.map(el => (el.id === id ? ( { ...state, title, description, dropDownValues }) : el))

        setData(updatedarray)
        // console.log('el',el);
    }

    return (
        <>
            <div className='container fluid'>
                <InputFields searchInput={searchInput} handleType={handleType} handleChange={handleChange} title={state.title}
                    description={state.description} dropDownValues={state.dropDownValues} handleSubmit={handleSubmit} dropdown={dropdown}
                    titleValidation={validation.titleValidation} descriptionValidation={validation.descriptionValidation} typeValidation={validation.typeValidation} />
              
                    <div className='row 12'>
                    <table >
                        <thead className='col-3'>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Type</th>

                            </tr>
                        </thead>

                        <tbody >
                            {data.map((row) => {
                                return (
                                    
                                    // console.log('row',row);
                                    <>
                                
                                        <tr>
                                            <td>{row.title}</td>
                                            <td>{row.description}</td>
                                            <td>{row.dropDownValues}</td>
                                           
                                            <td> <AiFillDelete style={{fontSize:'30px'}} onClick={() => handleDelete(row.id)}>Delete</AiFillDelete>
                                                {update ?
                                                    <GrUpdate style={{fontSize:'30px'}} onClick={() => handleUpdate(row.id)}>update</GrUpdate> :
                                                    <FaEdit  style={{fontSize:'30px'}} onClick={() => handleEdit(row)}>Edit</FaEdit>

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


