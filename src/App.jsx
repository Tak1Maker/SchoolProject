import './App.css';
import React from 'react';
import Accueil from './Pages/Accueil';
import BuyPage from './Pages/BuyPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
    return (
        <>
        <div className='Accueil'>
            <Navbar/>
            <Accueil/>
        </div>
        </>
    );
}

export default App;