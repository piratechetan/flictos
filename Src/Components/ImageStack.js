import React from 'react'
import { View,StyleSheet,Dimensions,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageView from './ImageView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FullImage from './FullImage';
const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
    return (
        <Stack.Navigator>
      <Stack.Screen name="Photos" component={ImageView} options={{
          headerTitleAlign:'center',
          headerLeft: () => (
            <Ionicons name="menu" size={30} style={{marginLeft:5}} onPress={()=>navigation.openDrawer()}/>
          )
          
      }}/>
      
      
      </Stack.Navigator>
    )
}

export default StackScreen;
