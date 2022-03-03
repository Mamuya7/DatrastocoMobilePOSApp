import React from 'react';
import { View, Text, } from 'react-native';
import { styles } from '../assets/styles/AppStyles';
import AppButton from '../component/coreComponent/AppButton';

const WelcomeScreen = ({navigation}) =>{
    return(
    <View style = { styles.container }>
      <View style = { styles.wContainer}>
          <View>
               <Text style = { styles.textStyles }>Welcome</Text>
               <Text style = { styles.datrastock }>DatraStoco</Text>
          </View>
            <AppButton 
            title = 'Sign In'
            press = {() => navigation.navigate('Sign In')}
            />     
       </View>
      <View style = { styles.creative}><Text style = {styles.textCreative}>@Creative.inc</Text></View>
      <View style = { styles.grayView }></View>
    </View>
    );
}

export default WelcomeScreen;


