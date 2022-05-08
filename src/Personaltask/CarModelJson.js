import React, { useState } from 'react'

const CarModelJson = () => {
  const carName = [{ name: "carolla" }, { name: "honda" }, { name: "suzuki" }]
  const carModel = [
    { name: "xli", category: "carolla" },
    { name: "Gli", category: "carolla" },
    { name: "atlas", category: "carolla" },

    { name: "Rebon", category: "honda" },
    { name: "city", category: "honda" },
    { name: "bughati", category: "honda" },

    { name: "ferrari", category: "suzuki" },
    { name: "alto", category: "suzuki" },
    { name: "cultus", category: "suzuki" }
    
  ]
  const [car, setCar] = useState(carName);
  const [carmodal, setCarModal] = useState(carModel);

  console.log('carsssss',car);
  return (
    <div>
      <label>choose a car</label>
      <select value={car.name}
        onChange={(e) => setCar(e.target.value)}>
        <option>Plase select</option>
        {carName.map((el) => {
          return  <option>{el.name}</option>
         
        })}
      </select>
      <br />
      <label>models</label>
      <select value={carmodal.name} onChange={(e) => setCarModal(e.target.value)}>
        {carmodal.map((row) => {
          if (car === row.category) {
            return <option> {row.name} </option>
          }
        })}
      </select>
    </div>
  )
}

export default CarModelJson
