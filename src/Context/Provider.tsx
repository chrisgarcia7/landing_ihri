import React, {ReactNode, useContext, useState} from "react";
import { ContextPage } from "./Context.tsx";

interface VistaComponente{
    children: ReactNode
}

export default function ProviderPage({children}: VistaComponente){
    const[usuario, setUsuario]=useState<any>(null)
    const[correo,setCorreo]= useState<string>("")

    return(
        <ContextPage.Provider value={{usuario,setUsuario, correo, setCorreo}}>{children}</ContextPage.Provider>
    )
}

export function useContextPage(){
    return useContext(ContextPage)
}