import { createContext } from "react";

const boolean = true

export const ContextPage = createContext({
    usuario: null,
    setUsuario: (usuario: any)=>{},
    correo: "",
    setCorreo: (correo: string)=>{},
    isLoading: boolean
})