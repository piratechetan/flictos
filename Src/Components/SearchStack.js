import React from 'react'
import { View,StyleSheet,Dimensions, TouchableOpacity,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageView from './ImageView';
import SearchView from './SearchView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchResult from './SearchResult';
const Stack = createStackNavigator();

const SearchStack = ({navigation}) => {
    return (
        <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchView} options={{
          headerTitleAlign:'center',
          headerLeft: () => (
            <Ionicons name="menu" size={30} style={{marginLeft:10}} onPress={()=>navigation.openDrawer()}/>
          )
      }}/>
      <Stack.Screen name="Result" component={SearchResult} options={{
          headerTitle:"Search Result",
          headerTitleAlign:'center',
          headerLeft: () => (
            <Ionicons name="menu" size={30} style={{marginLeft:10}} onPress={()=>navigation.openDrawer()}/>
          ),
           
      }}/>
      </Stack.Navigator>
    )
}

export default SearchStack;