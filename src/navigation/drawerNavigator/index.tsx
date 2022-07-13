import React from 'react';
import {Colors} from '@config';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  FoodExpenses,
  HomeExpenses,
  ShoppingExpenses,
  HomeScreen,
} from '@screens';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
      <Drawer.Screen
        name="FoodExpenses"
        component={FoodExpenses}
        options={{
          title: 'Food Expenses',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
      <Drawer.Screen
        name="HomeExpenses"
        component={HomeExpenses}
        options={{
          title: 'Home Expenses',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
      <Drawer.Screen
        name="ShoppingExpenses"
        component={ShoppingExpenses}
        options={{
          title: 'Shopping Expenses',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigator;
