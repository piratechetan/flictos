import React from 'react'
import { View,StyleSheet,Dimensions,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FullImage from './FullImage';
import StackScreen from './ImageStack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomTab} options={{
          headerShown:false
      }}/>
      <Stack.Screen name="Image View" component={FullImage} options={{
          headerTitleAlign:'center',
          headerLeft: () => (
            <Ionicons name="menu" size={30} style={{marginLeft:5}} onPress={()=>navigation.openDrawer()}/>
          ),
          headerShown:false
      }}/>
      </Stack.Navigator>
    )
}

export default MainStack;
