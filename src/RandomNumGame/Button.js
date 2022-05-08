import React from 'react'

const button = ({anyNum,handleMinNum,chance,handleMaxNum,handlePlayagain,RandomNum,HandleRandomNum,close}) => {
    return (
        <div>
            <button onClick={handleMinNum}> less </button>
            <button onClick={(chance == 0 || anyNum == RandomNum) ? undefined : HandleRandomNum}> Guess a Number </button>
            <button onClick={handleMaxNum}>greator</button>
            <button onClick={handlePlayagain}> play again </button><br></br>
            <button onClick={close}> close</button>
        </div>
    )
}

export default button