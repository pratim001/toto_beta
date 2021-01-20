import React from 'react'
import { View,Text,StyleSheet,StatusBar,Dimensions,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default TopCard = () =>{
    return(
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <Icon name="list" color="grey" size={40}/>
            </TouchableOpacity>
            
        </View>
        <View>
            <TouchableOpacity style={styles.book}>
            <Text style={{textAlign:"center"}}>Book Ride</Text>
            </TouchableOpacity>
            
            
        </View>
        <View>
            <TouchableOpacity style={styles.instantBook}>
                <Text style={{textAlign:"center"}}>Instant ride</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}



const styles = StyleSheet.create({
    container:{
        elevation:5,
        backgroundColor:'white',
        width:Dimensions.get('screen').width,
        flexDirection:'row',
    },
    iconContainer:{
        
        flexDirection:'column',
       
        padding:10,
    },
    book:{
        backgroundColor:"#cffc03",
        width:100,
        borderRadius:20,
        padding:10,
        marginTop:10,
        marginLeft:20,
    },
    instantBook:{
        backgroundColor:"#cffc03",
        width:100,
        borderRadius:20,
        padding:10,
        marginTop:10,
        marginLeft:20,
    },
});