import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './android/app/Login';
import Transactions from './android/app/Transactions';
import Stats_Income from './android/app/Stats_Income';
import Stats_Expense from './android/app/Stats_Expense';
import Accounts from './android/app/Accounts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#f0c404',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#f0c404',
              fontWeight: 'bold',
            },
            headerTintColor: '#f0c404',
          }}
        />
        {/* <Stack.Screen
          name="Stats"
          component={Stats_Income}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#f0c404',
              fontWeight: 'bold',
            },
            headerTintColor: '#f0c404',
          }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats_Expense}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#f0c404',
              fontWeight: 'bold',
            },
            headerTintColor: '#f0c404',
          }}
        />
        <Stack.Screen
          name="Accounts"
          component={Accounts}
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#f0c404',
              fontWeight: 'bold',
            },
            headerTintColor: '#f0c404',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
