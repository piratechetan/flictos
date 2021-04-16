import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackScreen from './ImageStack';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
      <Tab.Screen name="Home" component={StackScreen} options={{
          tabBarIcon:()=>(
               <Foundation name="home" size={25} />
          )
      }}/>
      <Tab.Screen name="Search" component={SearchStack} 
      options={{
          tabBarIcon:()=>(
               <Ionicons name="search" size={25} />
          )
      }}/>
    </Tab.Navigator>
    )
}

export default BottomTab;
