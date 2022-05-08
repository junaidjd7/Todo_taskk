import React from 'react'

const MaxMin = ({HandleSetMaxRange,minVal,maxVal,HandleSetMinRange}) => {
  return (
    
      <div className="numContainer">
                    <div>
                        <p>Min</p>
                        <input type="number" value={minVal} onChange={HandleSetMinRange} />
                        <br />
                    </div>

                    <div>
                        <p>Max</p>
                        <input type="number" value={maxVal} onChange={HandleSetMaxRange} />
                        <br />
                        
                    </div>
                </div>
    
  )
}

export default MaxMin