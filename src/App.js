import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
