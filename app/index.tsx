import { Ionicons } from '@expo/vector-icons'; // <-- Adicionado o vector-icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList, TabParamList } from './types/navigation';

import Dashboard from './screens/DashboardScreen';
import Explorar from './screens/ExplorarScreen';
import Login from './screens/LoginScreen';
import Perfil from './screens/PerfilScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabIcon({ name, label, focused }: { name: any; label: string; focused: boolean }) {
  return (
    <View style={[tabStyles.iconWrap, focused && tabStyles.iconWrapActive]}>
      <Ionicons name={name} size={24} color={focused ? "#FFF" : "#92dfe5"} />
      {focused && <Text style={tabStyles.label}>{label}</Text>}
    </View>
  );
}

const tabStyles = StyleSheet.create({
  iconWrap: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 25, gap: 8 },
  iconWrapActive: { backgroundColor: '#222b54' },
  label: { fontSize: 16, fontWeight: '700', color: '#FFF' },
});

function TabNavigator({ route }: any) {
  // Recebe o usuário do Login
  const usuario = route?.params?.usuario || 'Visitante';
  
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: Platform.OS === 'ios' ? 100 : 80, backgroundColor: '#FDF6EE' } }}>
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard} 
        initialParams={{ usuario }} 
        options={{ tabBarIcon: ({ focused }) => <TabIcon name={focused ? "home" : "home-outline"} label="Início" focused={focused} /> }} 
      />
      <Tab.Screen 
        name="Explorar" 
        component={Explorar} 
        initialParams={{ usuario }} 
        options={{ tabBarIcon: ({ focused }) => <TabIcon name={focused ? "search" : "search-outline"} label="Explorar" focused={focused} /> }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        initialParams={{ usuario }} 
        options={{ tabBarIcon: ({ focused }) => <TabIcon name={focused ? "person" : "person-outline"} label="Perfil" focused={focused} /> }} 
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}