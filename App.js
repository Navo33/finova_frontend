import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './android/app/Login';
import Transactions from './android/app/Transactions';
import Trans_Monthly from './android/app/Trans_Monthly';
import Trans_Total from './android/app/Trans_Total';
import Trans_Note from './android/app/Trans_Note';
import Stats_Income from './android/app/Stats_Income';
import Stats_Expense from './android/app/Stats_Expense';
import Accounts from './android/app/Accounts';
import ExpenseFab from './android/app/components/Transaction/ExpenseFab';

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
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Trans_Monthly"
          component={Trans_Monthly}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Trans_Total"
          component={Trans_Total}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Trans_Note"
          component={Trans_Note}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Stats_Income"
          component={Stats_Income}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Stats_Expense"
          component={Stats_Expense}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Accounts"
          component={Accounts}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ExpenseFab"
          component={ExpenseFab}
          options={{
            // headerStyle: {
            //   backgroundColor: '#000',
            // },
            // headerTitleStyle: {
            //   color: '#f0c404',
            //   fontWeight: 'bold',
            // },
            // headerTintColor: '#f0c404',
            headerShown: false,
            // presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
