import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import CountComponent from './CountComponent';
import ReduxCounter from './ReduxCounter';

export const TutorialContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const titleRef = useRef();

  // useEffect(()=> {
  //   console.log(`UseEffect ran, current count is ${count}!`)
  //   if(count <= 0) setCount(0);
    
  //   if(count > 5 && titleRef.current) {
  //     titleRef.current.innerText = `Count of ${count} is way too high!!!`
  //     titleRef.current.style = `color:rgb(255, calc(${count*15}), 0);animation:flash .5s ease-in-out alternate infinite`
  //   }

  //   return () => {
  //     titleRef.current.innerText = "Hello World!"
  //     titleRef.current.style = ""
  //   }
  // },[count]);

  const handleIncrementCount = () => setCount(count + 1);
  const handleDecrementCount = () => setCount(count - 1);

  return (
    <TutorialContext.Provider value={count}>
      <main>
        <h1 ref={titleRef}>Hello World!</h1>
        <h2>Count: <CountComponent /></h2>
        <button className="incrementBtn" onClick={handleIncrementCount}>Increment Count</button>
        <button className="decrementBtn" onClick={handleDecrementCount}>Decrement Count</button>
        <ReduxCounter titleRef={titleRef}/>
        <Link to="/vendors">Check out the Vendors</Link>
      </main>
    </TutorialContext.Provider>
  );
}

export default App;
