import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  let toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#191970';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
        <TextForm mode={mode} heading="Enter text below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
