import react,{ useState } from "react";

const ListContainer = () => {
    const [greetings, setGreetings]  = useState('Hola Primer Texto del Ecommerce');
return (
    <>
    <h1 className="text-center pt-3">{greetings}</h1>
    </>
);
}

export default ListContainer;