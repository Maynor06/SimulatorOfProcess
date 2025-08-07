import { createContext, useContext, useState, type ReactNode } from "react";

export interface Proceso {
    PID: number; 
    NombreProceso: string; 
    MemoriaRequired: number; 
    Duration: number;
}

interface PrecesoContextType {
    procesos: Proceso[];
    agregarProceso: (proceso: Proceso) => void;
}

const ProcesoContext = createContext<PrecesoContextType | undefined>(undefined);

export const useProcesoContext = () => {
    const context = useContext(ProcesoContext);
    if(!context) {
        throw new Error("useProcesoContext debe usarse dentro de un ProcesoProvider")
    }
    return context;
}

interface ProcesoProviderProps {
    children: ReactNode;
}

export const ProcesoProvider = ({children}: ProcesoProviderProps) => {
    const [procesos, setProcesos] = useState<Proceso[]>([]);

    const agregarProceso = (proceso: Proceso) => {
        setProcesos(prev => [...prev, proceso])
    }


    return (
        <ProcesoContext.Provider value={{ procesos, agregarProceso }} >
            {children}
        </ProcesoContext.Provider>
    )
}
