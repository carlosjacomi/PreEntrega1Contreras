import { useParams } from 'react-router-dom';

import NavBar from '../../components/navbar/NavBar'
import ItemDetailContainer from '../../components/ItemDetail/ItemDetailContainer';

const ItemPage = () => {
  const params = useParams();
  return (
    <>
      <NavBar/>
      <ItemDetailContainer product={params}/>
    </>
  )
}

export default ItemPage
