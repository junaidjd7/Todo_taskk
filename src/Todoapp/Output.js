import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';


const Output = ({rowtitle,rowdescription,rowdropDownValues,handleDelete,handleUpdate,handleEdit,update,rowid,row}) => {
    return (
        <div>
            <tr>
                <td>{rowtitle}</td>
                <td>{rowdescription}</td>
                <td>{rowdropDownValues}</td>

                <td> <AiFillDelete style={{ fontSize: '30px' }} onClick={() => handleDelete(rowid)}>Delete</AiFillDelete>
                    {update ?
                        <GrUpdate style={{ fontSize: '30px' }} onClick={() => handleUpdate(rowid)}>update</GrUpdate> :
                        <FaEdit style={{ fontSize: '30px' }} onClick={() => handleEdit(row)}>Edit</FaEdit>

                    }</td>

            </tr>
        </div>
    )
}

export default Output