import { SafeAreaView ,TextInput,StyleSheet,Dimensions,FlatList,Image,Text,View, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'


const SearchView = ({navigation}) => {
    
    const [Username,setUsername] = useState('')
    return (
       <SafeAreaView style={styles.container}>
           <TextInput 
       placeholder={"Search"}
       placeholderTextColor={"#242B2E"}
       

       style={{borderWidth:2,borderRadius:12,color:"#242B2E",margin:20,borderColor:'#758283'}}
       value={Username}
       onChangeText={(text) => setUsername(text)}
       />
       <TouchableOpacity onPress={()=>navigation.navigate('Result',{value:Username})}>
           <View style={styles.button}>
           <Text>Search</Text>
       </View>
       </TouchableOpacity>
       
     
     
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 container: {
flex: 1,
justifyContent:'center',
},
image: {
width: (Dimensions.get('window').width / 2) - 20,
height: 150,
margin: 10,
},
flatListStyle: { flex: 1,
},
search: { height: 40,
marginLeft: 10,
marginRight: 10,
fontSize: 20,
marginTop: 10,


},
button:{
    backgroundColor:"#FF6666",
    height:40,
    width:110,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:12,
    marginTop:20
}
});
export default SearchView
