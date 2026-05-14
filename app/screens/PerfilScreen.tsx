import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Perfil({ route }: any) {
    const usuario = route.params?.usuario || 'Voluntário';

    // Parte 6 - Feedback de Ação (Diálogo)
    const handleEditarInteresses = () => {
        Alert.alert(
            "Editar Interesses",
            "Escolha sua causa prioritária:",
            [
                { text: "Educação", onPress: () => console.log("Educação selecionada") },
                { text: "Meio Ambiente", onPress: () => console.log("Meio Ambiente selecionado") },
                { text: "Saúde", onPress: () => console.log("Saúde selecionada") },
                { text: "Cancelar", style: "cancel" }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{usuario[0]}</Text>
                </View>
                <Text style={styles.userName}>{usuario}</Text>
                <Text style={styles.userSub}>ONG Connect Member</Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={handleEditarInteresses}>
                    <Text style={styles.buttonText}>✏️ Editar Interesses</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#222b54' }]}>
                    <Text style={[styles.buttonText, { color: '#222b54' }]}>Configurações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#bbdfe2' },
    header: {
        backgroundColor: '#222b54',
        padding: 40,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 10
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#92dfe5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    avatarText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#222b54'
    },

    userName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#92dfe5'
    },

    userSub: {
        color: '#bbdfe2',
        fontSize: 14
    },

    content: {
        padding: 20,
        marginTop: 20
    },

    button: {
        backgroundColor: '#222b54',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3,
    },

    buttonText: {
        color: '#92dfe5',
        fontWeight: '700',
        fontSize: 16
    },
});