import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './screens/Home'
import Splash from './screens/Splash'
import Login from './screens/Login'
import Register from './screens/Register'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' options={{
          headerShown: false
        }} component={Splash} />
        <Stack.Screen name='Home' options={{
          headerShown: false
        }} component={Home} />
        <Stack.Screen name='Login' options={{
          headerShown: false
        }} component={Login} />
        <Stack.Screen name='Register' options={{
          headerShown: false
        }} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;