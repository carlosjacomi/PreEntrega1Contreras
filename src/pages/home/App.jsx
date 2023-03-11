import { useParams } from 'react-router-dom';

import NavBar from '../../components/NavBar'
import ItemListContainer from '../../components/ItemListContainer';

function App() {
  const params = useParams();
  const isHome = params.id==='' || params.id===undefined? true : false;
  return (
    <>
      <NavBar/>
      {console.log(params)}
      {console.log(isHome)}
      <ItemListContainer isHome={isHome} categoryId={params.id}/>
    </>
  )
}

export default App
