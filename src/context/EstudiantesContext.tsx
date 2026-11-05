import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Estudiante {
    id: string;
    name: string;
}

interface EstudiantesContextData {
    estudiantes: Estudiante[];
    agregarEstudiante: (name: string) => void;
}

const EstudiantesContext = createContext<EstudiantesContextData>({} as EstudiantesContextData);

const estudiantesIniciales: Estudiante[] = [
    { id: '1', name: 'Juan' },
    { id: '2', name: 'María' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Ana' },
    { id: '5', name: 'Luis' },
    { id: '6', name: 'Sofía' },
    { id: '7', name: 'Pedro' },
    { id: '8', name: 'Lucía' },
    { id: '9', name: 'Mateo' },
    { id: '10', name: 'Valentina' },
];

export const EstudiantesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesIniciales);

    const agregarEstudiante = (name: string) => {
        if (name.trim() === '') return;
        const nuevo: Estudiante = {
            id: String(estudiantes.length + 1),
            name: name.trim(),
        };
        setEstudiantes([...estudiantes, nuevo]);
    };

    return (
        <EstudiantesContext.Provider value={{ estudiantes, agregarEstudiante }}>
            {children}
        </EstudiantesContext.Provider>
    );
};

export const useEstudiantes = () => useContext(EstudiantesContext);