import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/app/counterSlice'

const ReduxCounter = ({titleRef}) => {
    const reduxCount = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log(`UseEffect ran, current count is ${reduxCount}!`)

        if(reduxCount < 0) dispatch(increment());
        
        if(reduxCount > 10 && titleRef.current) {
            titleRef.current.innerText = `Redux count of ${reduxCount} is way too high!!!`
            titleRef.current.style = `color:rgb(255, calc(${reduxCount*15}), 0);animation:flash .5s ease-in-out alternate infinite`
        }
        
       return () => {
            titleRef.current.innerText = "Hello World!"
            titleRef.current.style = ""
        }
    },[reduxCount]);
    
    const handleIncrementCount = () => dispatch(increment());
    const handleDecrementCount = () => dispatch(decrement());

    return (
        <div className='reduxContainer'>        
            <h2>Redux Count: {reduxCount}</h2>
            <button className="reduxIncrementBtn" onClick={handleIncrementCount}>Increment Count</button>
            <button className="reduxDecrementBtn" onClick={handleDecrementCount}>Decrement Count</button>
        </div>
    )
}

export default ReduxCounter