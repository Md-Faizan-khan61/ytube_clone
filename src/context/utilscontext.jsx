import { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);
export const UtilsContextProvider = ({children}) => {
    const [isSidebar , setIsSidebar] = useState(false);
    const [MobileShow, setMobileShow] = useState(false);

    return  <UtilsContext.Provider value={{isSidebar, setIsSidebar, MobileShow, setMobileShow}}>
                 {children}
            </UtilsContext.Provider>
}
export const useUtils = () => {
        const utilsCont =   useContext(UtilsContext);
        if (!utilsCont) return null;
        return utilsCont;
}