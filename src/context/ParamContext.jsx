import { createContext } from "react";


/** Este componente se usa para los context de los parametros
 * @component
*/

export const ParamContext = createContext();

const ParamProvider = ({children}) => {

    const isHomePage = (url) => {
        if (url==='' || url===undefined) {return true} else {return false}
    }

    const isItemPage = (item) => {
        if (item===undefined) {return false} else {return true}
    }

    const value = {
        isHomePage,
        isItemPage
    }
    
    return (
        <ParamContext.Provider value={value}>
            {children}
        </ParamContext.Provider>
    );
}    
export default ParamProvider;