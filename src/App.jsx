import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import { useState } from 'react';
import {mock1} from "./constants/users.js";
import Resultados from './Resultados.jsx'


function App() {
    const[query, setQuery] = useState("");  //Cada vez que se recarga se pinta la aplicación
    const [resultado, setResultado] = useState(null);

    const callServer = () => {
        console.log("CLICK!");
        setResultado(mock1.users)
    }
    
    return (
        <div className="App">
           <Header/>
           <h2 id="buscador">Buscador de Usuarios</h2>
           <input type="text" id="query" value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>ç
           <button id="botonsearch" onClick={()=>callServer()}>Buscar</button>
            {resultado && <Resultados resultado={resultado}/>}      //Debo primero comprobar que resultado tenga valor si no, no imprimo para no dar error
        </div>
    );
}