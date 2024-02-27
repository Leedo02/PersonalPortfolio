import { BrowserRouter, Route, Routes } from 'react-router-dom';
import app from './firebase';
import './App.css';
import Home from './pages/Home';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
