import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ListContainer from './components/ListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar/>
      <ListContainer/>
      <ItemCount/>
    </>
  )
}

export default App
