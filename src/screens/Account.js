import React from 'react'
import { View,Text,StyleSheet,StatusBar,Dimensions,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default Account = () =>{
    return(
    <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle='dark-content'/>
        <TouchableOpacity>
            <Icon name="arrow-back" size={32} color="black"/>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
       
        <Image source={require('../Images/elonMUsk.jpg')} style={styles.profilePicture}/> 
        <TouchableOpacity>
            <Icon name="linked-camera" size={40} color="#34eba1"/>
        </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.field}>
                First Name
            </Text>
            <View style={styles.dataContainer}>
                <View style={{flex:4}}>
                    <Text style={styles.data}>
                        Pratim
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.field}>
                Last Name
            </Text>
            <View style={styles.dataContainer}>
                <View style={{flex:4}}>
                    <Text style={styles.data}>
                        Ghosh
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.field}>
                Phone
            </Text>
            <View style={styles.dataContainer}>
                <View style={{flex:4}}>
                    <Text style={styles.data}>
                        6296276773
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <Image source={require('../Images/zoto_logo.png')} style={{width:200,height:50}} />
    </View>
    );
}


const styles = StyleSheet.create({
    imageContainer:{
        width:Dimensions.get('screen').width,
        alignItems:'center',
        height:Dimensions.get("screen").height/3,
        justifyContent:'center',
        borderBottomColor:'#34eba1',
        borderBottomWidth:1
    },
    container:{
        backgroundColor:'white',
        height:Dimensions.get('screen').height,
    },
    profilePicture:{
        width:140,
        height:140,
        borderRadius:70,
    },
    field:{
        marginLeft:10,
        color:"#b8b6b2",
    },
    data:{
        marginLeft:10,
        marginTop:10,
        marginBottom:0,
        fontSize:20,
    },
    contentContainer:{
        margin:20
    },
    dataContainer:{
        flexDirection:'row',

    },
    editButton:{
        backgroundColor:'#34eba1',
        alignItems:'center',
        height:40,
        justifyContent:'center',
        borderRadius:10,
    },
    editText:{
        color:'white',
        fontWeight:'bold'
    }
})