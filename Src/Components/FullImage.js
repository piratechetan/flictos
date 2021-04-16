import { View,Text,StyleSheet,Image,Dimensions, TouchableOpacity} from 'react-native';
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const FullImage = ({navigation,route}) => {
  
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <View style={{flexDirection:'row',borderColor:'#fff',borderWidth:2,margin:15,width:80}}>
           <FontAwesome name="close" size={25} style={{margin:5}} color={'#fff'} />
           <Text style={{color:"#fff",marginTop:10}}>Close</Text>
         </View>
          </TouchableOpacity>
         
         <Image source={{uri:route.params.url_s}} style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
flex: 1,
backgroundColor: '#0D0D0D',

},
image: {
width:Dimensions.get('screen').width,
height: 300,
marginVertical:90

}
});
export default FullImage;
