import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Componente01 from './src/simulacro-parcial/Componente01';
import Props02 from './src/simulacro-parcial/Props02';
import Axios03 from './src/simulacro-parcial/Axios03';
import AsyncStorage04 from './src/simulacro-parcial/AsyncStorage04';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Componente01">
        <Stack.Screen name="Componente01" component={Componente01} />
        <Stack.Screen name="Props02" component={Props02} />
        <Stack.Screen name="Axios03" component={Axios03} />
        <Stack.Screen name="AsyncStorage04" component={AsyncStorage04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;