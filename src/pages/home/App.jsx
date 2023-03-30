import { useContext } from "react"

import { useParams } from 'react-router-dom';

import NavBar from '../../components/navbar/NavBar'
import ItemListContainer from '../../components/itemList/ItemListContainer';
import { ParamContext } from '../../context/ParamContext';



const App = () =>  {
  const params = useParams();
  const {isHomePage} = useContext(ParamContext)
  return (
    <>
      <NavBar/>
      <ItemListContainer isHome={isHomePage(params.id)} categoryId={params.id}/>
    </>
  )
}

export default App
