import React from 'react';
import { View, Text, } from 'react-native';
import { styles } from '../assets/styles/AppStyles';
import AppButton from '../component/coreComponent/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({navigation}) =>{

  const getUser = async () => {
    try {
      const userObj = await AsyncStorage.getItem('User')
      if(userObj !== 'undifined' && userObj != null){
        let user = JSON.parse(userObj); 
        if(user.username != null && user.password != null){
        navigation.navigate('Home'); 
      }
      }
      else{
        navigation.navigate('Sign In')
      }
    } catch(e) {
      console.log(e);
    }

  }
    return(
    <View style = { styles.container }>
      <View style = { styles.wContainer}>
          <View>
               <Text style = { styles.textStyles }>Welcome</Text>
               <Text style = { styles.datrastock }>DatraStoco</Text>
          </View>
            <AppButton 
            title = 'Sign In'
            press = {() => getUser()}
            />     
       </View>
      <View style = { styles.creative}><Text style = {styles.textCreative}>@Creative.inc</Text></View>
      <View style = { styles.grayView }></View>
    </View>
    );
}

export default WelcomeScreen;


