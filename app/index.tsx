import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App(){
  return(

    <Stack.Navigator initialRouteName = "Login"
    screenOptions = {{headerShown: false}}
    >
      <Stack.Screen
      name = "Login"
      component ={LoginScreen}
      options={{ title: 'Acesso', headerShown: false}}
      />

      <Stack.Screen
      name = "Dashboard"
      component ={DashboardScreen}
      options={{ title: 'Dashboard Principal'}}
      />

    </Stack.Navigator>

  );
}
