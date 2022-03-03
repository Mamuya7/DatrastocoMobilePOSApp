/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import ScanningScreen from './screens/ScanningScreen';
import ScannedItemsScreen from './screens/ScannedItemsScreen';
import InvoiceScreen from './screens/InvoiceScreen';


const Stack = createNativeStackNavigator();


const App = () => {
    return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen  
                  name="Welcome" 
                  component = { WelcomeScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />

              <Stack.Screen  
                  name="Sign In" 
                  component = { AuthScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />

              <Stack.Screen  
                  name="Home" 
                  component = { HomeScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />

              <Stack.Screen  
                  name="Sign Up" 
                  component = { SignUpScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />

              <Stack.Screen  
                  name="Scan" 
                  component = { ScanningScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />

              <Stack.Screen  
                  name="Scanned Items" 
                  component = { ScannedItemsScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />

              <Stack.Screen  
                  name="Invoice" 
                  component = { InvoiceScreen } 
                  options={{headerTintColor: 'orange', 
                            headerTitleAlign: 'left',
                            headerShown: false,
                          }} 
              />
          </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
 
 export default App;
 

 
 
 