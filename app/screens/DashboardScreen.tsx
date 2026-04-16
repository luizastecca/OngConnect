import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function HomeScreen({route, navigation}: Props){
    const { userName, userId } = route.params;

    return(
        <View>
            <Text>Bem-vindo, {userName}!</Text>
            <Text>Seu ID é: {userId}</Text>
            <View>
                <Button title='Voltar' color="#222b54ff" onPress={()=> navigation.goBack()}
                    /> 
                <Button title="Logout (Reset)"
                color="#92dfe5ff"
                onPress={() => navigation.reset(
                    {index: 0, routes:[{name:'Login'}]
                })}
                />

            </View>


        </View>
    )
}

const styles = StyleSheet.create({

 button: {
    backgroundColor: '#222b54ff',
    padding: 12,
    borderRadius: 20,
    marginTop: 10,
    fontSize: 17,
  },

    title: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    color: '#222b54ff',
  },
});