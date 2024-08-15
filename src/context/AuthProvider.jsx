import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidApi";

export const AuthContext = createContext()

// For Global State Managemant use createContext..
export default function AuthProvider({children}){
// For Local state management use useState..     
const[loading,setLoading] = useState(false);
const[data,setData] = useState([]);
const[value,setValue] = useState("New");

useEffect(()=>{
    fetchAlldata(value);
},[value])

const fetchAlldata=(query)=>{
    setLoading(true)
    fetchData(`search/?q=${query}`).then(({contents})=>{
     setData(contents);
     setLoading(false)
    })
}
    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
           {children} 
        </AuthContext.Provider>
    )
}

//custom hook -: It's a more convenient and concise way to consume context value.
export const useAuth = () => useContext(AuthContext)