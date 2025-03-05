import { createContext } from "react";

export const ContextPage = createContext({
    usuario: null,
    setUsuario: (usuario: any)=>{},
    correo: "",
    setCorreo: (correo: string)=>{},
})