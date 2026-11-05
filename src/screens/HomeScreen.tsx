import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useEstudiantes } from '../context/EstudiantesContext';

export const HomeScreen = () => {
    const { estudiantes, agregarEstudiante } = useEstudiantes();
    const [nombre, setNombre] = useState('');

    const handleAgregar = () => {
        agregarEstudiante(nombre);
        setNombre('');
    };

    return (
        <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Lista de Estudiantes</Text>

            <TextInput
                placeholder="Nombre del estudiante"
                value={nombre}
                onChangeText={setNombre}
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
            />

            <Button title="Agregar" onPress={handleAgregar} />

            <FlatList
                data={estudiantes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                        <Text>{item.id} - {item.name}</Text>
                    </View>
                )}
                style={{ marginTop: 15 }}
            />
        </View>
    );
};