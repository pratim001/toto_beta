import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  LinearGradient,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'



export default Login = ()=>{
    return(
        <View style={styles.container}>
          <StatusBar backgroundColor='#42f5a1' barStyle="light-content"/>
        <View style={styles.header}>
            <Text>Register Now!</Text>
        </View>
        <View style={styles.footer}>
            <Text>Signup</Text>
        </View>
        </View>
     

    )
}

const styles = StyleSheet.create({
    containter:{
        flex:1,
        backgroundColor:"#42f5a1"
    },
    header:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    

})