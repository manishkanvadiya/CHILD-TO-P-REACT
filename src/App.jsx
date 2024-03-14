import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  const [data, setData] = useState('Hello');

  function textChange(elm) {
    setData(elm);
  }
  return (
    <>
      <ChildComponent textChange={textChange} />
      <h1>{data}</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
