import { useParams } from 'react-router-dom';

import NavBar from '../../components/navbar/NavBar'
import ItemListContainer from '../../components/itemList/ItemListContainer';



const App = () =>  {
  const params = useParams();
  const isHome = params.id==='' || params.id===undefined? true : false;
  return (
    <>
      <NavBar/>
      <ItemListContainer isHome={isHome} categoryId={params.id}/>
    </>
  )
}

export default App
