
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Olá, Bem-vindo! 👋</Text>

            <View style={styles.statsRow}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>12</Text>
                    <Text style={styles.statLabel}>ONGs Ativas</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>5</Text>
                    <Text style={styles.statLabel}>Inscrições</Text>
                </View>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Destaque do Dia</Text>
                <Text style={styles.infoText}>A ONG "Educar+" precisa de voluntários para este sábado!</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbdfe2',
        padding: 20
    },

    welcome: {
        fontSize: 32,
        fontWeight: '700',
        color: '#222b54',
        marginTop: 40,
        marginBottom: 20
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    statCard: {
        backgroundColor: '#222b54',
        width: '48%',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 5
    },

    statNumber: {
        fontSize: 24,
        fontWeight: '700',
        color: '#92dfe5'
    },

    statLabel: {
        color: '#bbdfe2',
        fontSize: 12
    },

    infoCard: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#222b54',
        elevation: 3
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222b54',
        marginBottom: 5
    },

    infoText: {
        color: '#666',
        lineHeight: 20
    },
});