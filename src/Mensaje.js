export const Mensaje = (props )=> {
    return (<h1  // retur devuelve un solo objeto y dentro de el varios parametros envueltos 
    style={ // el color viene de props.color en App.js
        {color: props.color}}> 
        <h3>{props.message}</h3>
    </h1>) 
}
export const Descripcin = () => {
    return <p>
      Componentes Tipo color = Yellow' message = 'estos son los parametros '" "'
      </p>
}
//export default Mensaje
// export default Descripcin