import React from 'react'

const DifferentNum = ({randNum,maxRange,minRange}) => {
    return (
    <div className="randomNum">
    <p>
        Random Num <br></br>
        <span>{randNum}</span>
        <br />
        <span style={{ color: "red" }}>
        {(randNum!=null && randNum === maxRange )? " You guess Right Num" :(randNum === minRange) ? " You guess Less Num" :""}
        
        
        </span>
    </p>
</div>
  )
}

export default DifferentNum;


// (randNum && minRange==0) ?""