import React from 'react'
import Tombol from './component/Tombol';
import Tombol2 from './component/Tombol2';
import './Style.css';


function App() {
    function handleKlikBeranda() {
        alert("Hai");
      }
    
      function handleKlikLogin() {
        console.log("Halo");
      }
    
      return (
        <>
          <Tombol onKlik={handleKlikBeranda}>Beranda</Tombol>
          <Tombol onKlik={handleKlikLogin}>Login</Tombol>
          <Tombol>Buat akun</Tombol>
          <Tombol2 />
        </>
      );
}

export default App