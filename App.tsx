import React from 'react';
import { EstudiantesProvider } from './src/context/EstudiantesContext';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
    return (
        <EstudiantesProvider>
            <HomeScreen />
        </EstudiantesProvider>
    );
}