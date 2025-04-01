import React, {ReactNode, useContext, useEffect, useState} from "react";
import { ContextPage } from "./Context.tsx";

interface VistaComponente{
    children: ReactNode
}

export default function ProviderPage({children}: VistaComponente){
    const[usuario, setUsuario]=useState<any>(null);
    const[correo,setCorreo]= useState<string>("");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       const storageUser = localStorage.getItem("user");
       if(storageUser) {
        const parseUser = JSON.parse(storageUser);
        setUsuario(parseUser);
       }
       setIsLoading(false);
    }, []);

    useEffect(() => {
        if (usuario) {
          localStorage.setItem("user", JSON.stringify(usuario));
        } else {
          localStorage.removeItem("user");
        }
      }, [usuario]);

    return(
        <ContextPage.Provider value={{usuario,setUsuario, correo, setCorreo, isLoading}}>{children}</ContextPage.Provider>
    )
}

export function useContextPage(){
    return useContext(ContextPage)
}