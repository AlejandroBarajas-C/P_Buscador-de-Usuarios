import { useState } from 'react';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {
    const[query, setQuery] = useState("");  //Cada vez que se recarga se pinta la aplicación
    const callServer = () => {
        console.log("CLICK!");
    }
    
    return (
        <div className="App">
           <Header/>
           <h2 id="buscador">Buscador de Usuarios</h2>
           <input type="text" id="query" value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>ç
           <button id="botonsearch" onClick={()=>callServer()}>Buscar</button>
        </div>
    );
}