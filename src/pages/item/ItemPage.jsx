import { useParams } from 'react-router-dom';

import NavBar from '../../components/navbar/NavBar'
import ItemDetailContainer from '../../components/ItemDetail/ItemDetailContainer';

const ItemPage = () => {
  const params = useParams();
  const isItem = params.id==='' || params.id===undefined? false : true;
  return (
    <>
      <NavBar/>
      <ItemDetailContainer product={params} isItem={isItem}/>
    </>
  )
}

export default ItemPage
