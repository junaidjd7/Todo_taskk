import React from "react";
import { useState } from "react";
import MaxMin from './MaxMin';
import DifferentNum from './DifferentNum';
import Button from "./Button";

const GuessGame = ({close}) => {
    const [anyNum, setAnyNum] = useState(5);
    const [message, setMessage] = useState()
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(10);
    const [maxVal, setMaxVal] = useState(10);
    const [minVal, setMinVal] = useState(0);
    const [RandomNum, setRandomNum] = useState();
    const [count, setCount] = useState(0);
    const [playAgain, setplayAgain] = useState(false);
    const [chance, setChance] = useState(3)
    const [counter, setCounter] = useState(60);
    
    const HandleCounter=() => {
        setCounter((counter - 1), 1000)};


    const HandleRandomNum = () => {
        
        setCount(count + 1);
        setplayAgain(false);
        setMessage('')

        let x = Math.floor(Math.random() * (maxRange - minRange) + minRange);
        if (x == minRange) {
            x = x + 1;
        }
        setRandomNum(x);


    };


    const handleMaxNum = () => {
        if (RandomNum > anyNum) {
            
            setMaxRange(RandomNum);
        }
        else {
            setMessage('wrong guess')
            setChance(chance - 1)
        }

    };
    const handleMinNum = () => {
        if (RandomNum < anyNum) {
            setMinRange(RandomNum);
        }
        else {
            setMessage('wrong guess')
            setChance(chance - 1)
        }

    };
    const handlePlayagain = () => {
        setMinVal(0);
        setMaxVal(10);
        setAnyNum("");
        setplayAgain(true);
        setRandomNum("");
        setChance(3);
        setMinRange(0)
        setMaxRange(10)
        setCount(0)

    };

    const handleWinLoss = () => {

        if (anyNum != null && anyNum == RandomNum) {
            return (
                <h4 style={{ color: "green" }}>
                    Congratulation your attempt in {count} try
                </h4>
            );
        }
        else if (chance == 0) {
            return (
                <h4 style={{ color: "red" }}>
                    failed try again
                </h4>
            );
        }


    };


    const HandleSetMinRange = (e) => {
        //     if(anyNum>minVal){
        //    setMinVal(e.target.value);
        //    setMinRange(e.target.value);
        // }
        setMinVal(e.target.value);
        setMinRange(e.target.value);


    };
    const HandleSetMaxRange = (e) => {
        // if(anyNum<maxVal){
        //     setMaxVal(e.target.value);
        //     setMaxRange(e.target.value);
        // }
        setMaxVal(e.target.value);
        setMaxRange(e.target.value);


    };
    
    return (
        <div className="game">
            <div>Countdown: {HandleCounter}</div>
            <div> {message} </div>
            
            <div style={{ color: "red" }}> chance {chance} </div>
            <div className="container">
                <div>
                    <p>Insert any Number</p>
                    <input
                        type="number"
                        value={anyNum}
                        // onChange={(e) => setAnyNum(e.target.value)}
                        onChange={(e) => setAnyNum(e.target.value)}

                    />
                    {playAgain === true ? "" : handleWinLoss()}
                    
                </div>

                <DifferentNum null={null} randNum={RandomNum} maxRange={maxRange} minRange={minRange} />
                <MaxMin anyNum={anyNum} minVal={minVal} maxVal={maxVal} HandleSetMaxRange={HandleSetMaxRange} HandleSetMinRange={HandleSetMinRange} />
                <Button close={close} anyNum={anyNum} handleMinNum={handleMinNum} chance={chance} RandomNum={RandomNum} handleMaxNum={handleMaxNum} handlePlayagain={handlePlayagain} HandleRandomNum={HandleRandomNum} />

            </div>
        </div>
    );
};

export default GuessGame;