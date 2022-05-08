import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

const Outputt = ({row,rowtitle,rowdescription,rowdropDownValues,handleDelete,handleUpdate,handleEdit,update,rowid}) => {
  return (
    <div >  
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
                // console.log('row',row)
                <>
                
                    <tr>
                        <td>{rowtitle}</td>
                        <td>{rowdescription}</td>
                        <td>{rowdropDownValues}</td>
                       
                        <td> <AiFillDelete style={{fontSize:'30px'}} onClick={() => handleDelete(rowid)}>Delete</AiFillDelete>
                            {update ?
                                <GrUpdate style={{fontSize:'30px'}} onClick={() => handleUpdate(rowid)}>update</GrUpdate> :
                                <FaEdit  style={{fontSize:'30px'}} onClick={() => handleEdit(row)}>Edit</FaEdit>

                            }</td>

                    </tr>


                </>)
        })}

    </tbody>

</table></div>
  )
}

export default Outputt