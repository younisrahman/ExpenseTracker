import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  FoodExpenses: undefined;
  HomeExpenses: undefined;
  ShoppingExpenses: undefined;
  AddExpenses: undefined;
};

export type AddExpensesNavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddExpenses'>;
  route: RouteProp<RootStackParamList, 'AddExpenses'>;
};
export type HomeNavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};
