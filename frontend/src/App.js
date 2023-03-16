import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FormPage from './Pages/FormPage';
import HomePage from './Pages/HomePage';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
    <div className={`App ${isDark && 'dark'}`}>
      <div className="min-h-screen dark:bg-dark-bg">
        <header className="App-header dark:bg-dark-bg-dark">
          <NavBar mode={(modeVal) => setIsDark(modeVal)} />
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<FormPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
