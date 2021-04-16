
import React,{useState,useEffect} from 'react'
import { View,FlatList,StyleSheet,Dimensions,Image,Text,TouchableOpacity} from 'react-native';
import { Spinner } from 'native-base';
import MainStack from './MainStack';
import Axios from "axios";
import {useNavigation} from '@react-navigation/native'


const ImageView = () => {
    const [details, setDetails] = useState(null)
const navigation = useNavigation();
  const fetchDetails = async () => {
    try {
      
       const {data} = await Axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s');
       const details = data.photos.photo;
          
       setDetails(details)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchDetails()
  }, [])

  if (!details) {
    return (
      <View style={[styles.container,{justifyContent:'center'}]}>
        <Spinner color='red' />
      </View>
    )
  } else{
    return(
     <View>    
           <FlatList
     data={details}
     numColumns={3}
     renderItem={({item}) => 
     <TouchableOpacity onPress={()=>navigation.navigate('Image View',item)}>
         <Image source={{uri:item.url_s}} style={styles.image} />
     </TouchableOpacity>
      }
     
     />
        </View>

    )
  }
    
}

const styles = StyleSheet.create({
  container: {
flex: 1,
backgroundColor: '#F3F3F3',
},
image: {
width: (Dimensions.get('window').width / 3) ,
height: 150,
margin: 2,
},
flatListStyle: { flex: 1,
},
search: { height: 30,
marginLeft: 10,
marginRight: 10,
fontSize: 20,
marginTop: 10
}
});

export default ImageView;
