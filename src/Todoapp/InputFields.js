import React from 'react'

const InputFields = ({searchInput,handleType,handleChange,title,description,dropDownValues,handleSubmit,dropdown,titleValidation,descriptionValidation,typeValidation}) => {
   
    return (
    <div>
        <form>
        <h2 className=' text-center'>Todo App</h2>
      
                <div className='row d-flex justify-content-center'>
                    <div className=" col-sm-4">
                        <label for="inputPassword4"></label>
                        <input type="text"  value={searchInput} className="form-control" placeholder="filter" onChange={(e) => handleType(e)} />
                    
                    </div>
                </div>
                <div className="row">
                    <div className=" col-sm-3">
                        <label for="inputEmail4"></label>
                        <input name='title'  type="text" value={title} className="form-control" placeholder="title" onChange={handleChange} />
                        {titleValidation&&<span className='text-danger'>plese enter data</span>}
                    </div>

                    <div className=" col-sm-3">
                        <label for="inputPassword4"></label>
                        <input name='description' type="text" value={description} className="form-control" placeholder="description" onChange={handleChange} />
                        {descriptionValidation&&<span className='text-danger'>plese enter data</span>}
                   
                    </div>

                    <div className=" col-sm-3">
                        <label for="inputAddress2" ></label>
                        <select name='dropDownValues' value={dropDownValues} className="form-control" onChange={handleChange}>
                            {dropdown.map((el) => {
                                return <option>{el.name}</option>
                            })}

                        </select>
                        {typeValidation&&<span className='text-danger'>plese enter data</span>}

                    </div>

                    <div className='col-3 mt-4'>
                        <button className='btn btn-primary' onClick={ handleSubmit }>Submit</button>

                    </div>
                </div>
                </form>
    </div>
  )
}

export default InputFields