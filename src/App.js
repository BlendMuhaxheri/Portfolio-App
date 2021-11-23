import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'star',
              stroke: {
                width: 6,
                color: 'yellow'
              }
            }
          }
        }}

      />
      <NavBar />
      <Header />
    </>
  );
}

export default App;
