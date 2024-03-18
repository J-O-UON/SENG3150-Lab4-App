import React, { useState } from 'react';
import Button from './components/Button';



function App() {
  const [clicksCount, setClicksCount] = useState(0);
  const handleIncrement = () => {
    setClicksCount(clicksCount + 1);
  }

  // Code added as part of activity 2

  const handleDecrement = () => {
    setClicksCount(clicksCount - 1)
  };


  return (
    <>
      <Button onClick={handleIncrement} colour='#34f4e1'>Increment</Button>
      <Button onClick={handleDecrement} colour='#9abc21'>Decrement</Button>
      <br />
      You've clicked me {clicksCount} times!
    </>
  );
}

export default App;
