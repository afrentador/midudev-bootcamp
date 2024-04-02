import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <strong>Estamos Trabajando en Ello</strong>

}

const App = () => {  
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un Curso'/>
      <Mensaje color='yellow' message='de React'/>
      < Description />
    </div>
  );
}

export default App;
