import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import { useState } from 'react';
import {mock1} from "./constants/users.js";
import Resultados from './Resultados.jsx'
import CONFIG from "./config/config.js";
import { resolveConfig } from 'vite';



function App() {
    const[query, setQuery] = useState("");  //Cada vez que se recarga se pinta la aplicación
    const [resultado, setResultado] = useState(null);
    const [error, serError] = useState(null);

    const callServer = async() => {
        console.log("CLICK!");
        if(CONFIG.use_server){
            try {
            let queryparams;
            if(param==="all"){
                queryparams = "?limit=" + CONFIG.num_items;
            } else {
                queryparams = "/search?q=" + query;
            }
            const response = await fetch('${CONFIG.server_url}${queryparams}');
            const data = await response.json();
            console.log(data);
            setResultado(data.users);
            } catch(error){
                console.log(error);
                setError({desciption: error.message})
            }
        }else{
            setResultado(mock1.users)
        }
    }
    
    return (
        <div className="App">
           <Header/>
           <h2 id="buscador">Buscador de Usuarios</h2>
           <input type="text" id="query" value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>ç
           <button id="botonsearch" onClick={()=>callServer()}>Buscar</button>
           <button id='botonAll' onClick={callServer("all")}>Buscar Todos</button>
            {error && <h1>Ha habido un error: {error.desciption}</h1>}
            {resultado && <Resultados resultado={resultado}/>}      //Debo primero comprobar que resultado tenga valor si no, no imprimo para no dar error
        </div>
    );
}