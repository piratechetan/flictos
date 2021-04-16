import React,{useState,useEffect} from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
 
  StyleSheet,
  Text,

  View,Dimensions,Image, FlatList
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageView from './Src/Components/ImageView';

import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './Src/Components/ImageStack';
import BottomTab from './Src/Components/BottomTab';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './Src/Components/MainStack';
const Drawer = createDrawerNavigator();
const App = () => {
    return(
  <NavigationContainer>
    <Drawer.Navigator
    drawerType='slide'
    >
      <Drawer.Screen name="Home" component={MainStack} />
      
    </Drawer.Navigator>
  </NavigationContainer>
    )
  
};

const styles = StyleSheet.create({
  container: {
flex: 1,

},
});

export default App;
