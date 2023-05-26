import {Mensaje, Descripcin} from './Mensaje.js'; 
import './App.css';

const App = () => { // forma corecta de escribir una funcion 
  // los componentes se declaran en mayusculas para diferencia html miusculas 

  return (
    <div className="App">
      <Mensaje color='red' message= 'Estamos trabajando' />
      <Mensaje color='blue' message= 'en BootCamp de ' />
      <Mensaje color='yellow' message= 'React' />
      <strong> Sitio en Construccion </strong>
      <Descripcin></Descripcin>
    </div>
  );
}

export default App; 
