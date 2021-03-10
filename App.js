import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/homeScreen';
import ContactsList from './src/contactsListScreen';
import OpenContactInTextField from './src/openContactInTextFieldScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ContactsList" component={ContactsList}/>
        <Stack.Screen name="OpenContactInTextField" component={OpenContactInTextField}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;