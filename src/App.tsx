import React, {useState} from 'react';

function App() {
  const [isGreetingShown, setIsGreetingShown] = useState(false)
  return (
    <>
      {isGreetingShown ? 'Hello!' : 'Fuck off'}
      <button onClick={() => setIsGreetingShown(!isGreetingShown)}>Toggle me</button>
    </>
  );
}

export default App;
