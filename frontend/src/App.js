import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FormPage from './Pages/FormPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<FormPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
