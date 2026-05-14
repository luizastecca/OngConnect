import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const ONGS = [
    { id: '1', nome: 'Patas Amigas', causa: 'Proteção Animal', desc: 'Resgatamos animais de rua e promovemos a adoção responsável.', img: 'https://st2.depositphotos.com/7358038/11201/v/450/depositphotos_112010090-stock-illustration-animal-paws-icon.jpg' },
    { id: '2', nome: 'EcoVida', causa: 'Meio Ambiente', desc: 'Focada em reflorestamento e educação ambiental em áreas urbanas.', img: 'https://cdn-icons-png.magnific.com/512/1053/1053811.png' },
    { id: '3', nome: 'Educar+', causa: 'Educação', desc: 'Reforço escolar e atividades culturais para crianças carentes.', img: 'https://cdn-icons-png.flaticon.com/512/3197/3197910.png' },
];

export default function Explorar() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    // Parte 6 - Interação com a Lista
    const handleONGPress = (ong: typeof ONGS[0]) => {
        Alert.alert(ong.nome, `${ong.causa}\n\n${ong.desc}`);
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#222b54" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explorar ONGs</Text>
            <FlatList
                data={ONGS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => handleONGPress(item)}>
                        <Image source={{ uri: item.img }} style={styles.cardImage} />
                        <View>
                            <Text style={styles.cardName}>{item.nome}</Text>
                            <Text style={styles.cardCausa}>{item.causa}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbdfe2',
        padding: 20
    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bbdfe2'
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#222b54',
        marginBottom: 20,
        marginTop: 40
    },

    card: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15
    },

    cardName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222b54'
    },

    cardCausa: {
        fontSize: 14,
        color: '#666'
    },
});