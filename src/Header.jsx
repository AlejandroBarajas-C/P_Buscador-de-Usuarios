export default function Headers(props) {
    return (<div id="cabecera">
        <img className="logo" src={process.env.PUBLIC_URL + "/sun.webp"} alt="el logo de la página" />
        <h3 className="mensaje">Bienvenido a la página de Alejandro Barajas</h3>
        </div>
    )
}