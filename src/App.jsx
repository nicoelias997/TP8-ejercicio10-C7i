import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
   <Titulo></Titulo>
   <Formulario></Formulario>
   </Container>
  );
}

export default App;
