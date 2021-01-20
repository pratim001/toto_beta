import React from 'react'
import { View,Text,StyleSheet,StatusBar,Dimensions } from 'react-native'
import TopCard from '../components/topCard'
export default Home = () =>{
    return(
    <View style={{backgroundColor:'white',height:Dimensions.get('screen').height}}>
        <StatusBar backgroundColor={'white'} barStyle='dark-content'/>
        <TopCard/>
    </View>
    );
}