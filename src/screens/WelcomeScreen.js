import React, {useRef, useEffect }from 'react';
import { View, Text, Animated} from 'react-native';
import { styles } from '../assets/styles/AppStyles';
import AppButton from '../component/coreComponent/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({navigation}) =>{
const fadeText = useRef(new Animated.Value(0.01)).current;

useEffect(()=>{
  Animated.loop(
    Animated.timing(
      fadeText,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    )
  ).start()
  setTimeout(()=>{
    getUser()
  },6000);
},[fadeText]);


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
               <Animated.Text style = { [styles.datrastock, {opacity: fadeText} ]}>DatraStoco</Animated.Text>
          </View>
       </View>
      <View style = { styles.creative}><Text style = {styles.textCreative}>@Creative.inc</Text></View>
      <View style = { styles.grayView }></View>
    </View>
    );
}

export default WelcomeScreen;


