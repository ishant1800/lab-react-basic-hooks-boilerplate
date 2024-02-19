// Version 2
import React, { useState } from 'react';
import './App.css';
import UseStateEffectContext from './components/UseStateEffectContext';

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  return (
    <ToggleTheme.Provider value={theme}>
      <div className="app-container version-2">
        <h1>Toggle App Theme (Version 2)</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <UseStateEffectContext />
      </div>
    </ToggleTheme.Provider>
  );
}

export const ToggleTheme = React.createContext();

export default App;
