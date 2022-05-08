// multipal inputfields
import React, { useState } from 'react'

const InputField = () => {


  const dropDownValues = [{ name: 'amjad' }, { name: 'bashir' }, { name: 'nazir' }]
  const [dropdown, setDropdown] = useState(dropDownValues)

  const modal = {
    email: '',
    password: '',
    address: '',
    address2: '',
    date: '',
    time: '',
    dob: '',
    dropdown: '',
  }
  const [state, setState] = useState(modal)
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { state }])

  };
  console.log('data', data)

  return (

    <div className='container fluid'>
      <h2 className=' text-center'>User Form</h2>
      <div className="row">
        <div className=" col-sm-3">
          <label for="inputEmail4">Email</label>
          <input name='email' type="email" value={state.email} className="form-control" id="inputEmail4" placeholder="Email" onChange={handleChange} />
        </div>
        <div className=" col-sm-3">
          <label for="inputPassword4">Password</label>
          <input name='password' type="password" value={state.password} className="form-control" id="inputPassword4" placeholder="Password" onChange={handleChange} />
        </div>
        <div className=" col-sm-3">
          <label for="inputAddress">Address</label>
          <input name='address' type="text" value={state.address} className="form-control" id="inputAddress" placeholder="address1" onChange={handleChange} />
        </div>
        <div className=" col-sm-3">
          <label for="inputAddress2">Address 2</label>
          <input name='address2' type="text" value={state.address2} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-3">
          <label for="inputEmail4">Date</label>
          <input name='date' type="date" value={state.date} className="form-control" id="inputEmail4" placeholder="Email" onChange={handleChange} />
        </div>
        <div className=" col-sm-3">
          <label for="inputPassword4">Time</label>
          <input name='time' type="time" value={state.time} className="form-control" id="inputPassword4" placeholder="Password" onChange={handleChange} />
        </div>
        <div className=" col-sm-3">
          <label for="inputAddress">DOB</label>
          <input name='date' type="date" value={state.date} className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChange} />
        </div>
        <div className=" col-sm-3">
          <label for="inputAddress2">dropdown</label>
          <select name='dropdown' value={state.dropdown} className="form-control" onChange={handleChange}>
            {dropdown.map((el) => {
              return <option>{el.name}</option>
            })}
          </select>
        </div>
        <div className='col-2 mt-4'>
          <button onClick={handleSubmit}>Submit</button>

        </div>
      </div>


    </div>
  )
}

export default InputField

