import React,{useState} from 'react'

const ArrayMethod = () => {
const data=['sami','junaid','musiyab']

const[updatedArray,setupdatedArray]=useState(data)

const showdata=()=>{
let a=[...updatedArray]
let b=updatedArray.splice(1,0,'mm','dd')
 return setupdatedArray(b)

}


// 
  return (
      <div>
          <h1>ArrayMethod</h1>
          <button onClick={showdata}>show</button>
          <div>{updatedArray}</div>
      </div>
    
  )
}

export default ArrayMethod