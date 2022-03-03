import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../assets/styles/AppStyles';
import AppTextInput from '../component/coreComponent/AppTextInput';
import AppButton from '../component/coreComponent/AppButton';
import AuthServices from '../services/AuthServices';
import NoticeText from '../component/otherComponent/NoticeText';

const SignUpScreen = ({navigation}) => {

  const [username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  var isValidUser = false;
  
  return (
    <View style = {styles.container}>
        <View style = { styles.authContainer} >
            <View style = { styles.topView }></View>
            <View style = { styles.authBottomView }>
                <View style = {styles.wrapContainer}>
                    <View style = {{alignItems: 'center', marginBottom: 20}}><Text style = {styles.logoText}>DatraStoco</Text></View>
                    <View style = {styles.loginContainer}>
                      <Text style = {styles.labelText}>Username</Text>
                      <AppTextInput 
                        placeholder = 'e.g Email or Phone Number'
                        onChangeText = { setUsername }
                      />
                      <Text style = {styles.labelText}>Password</Text>
                      <AppTextInput
                        onChangeText = { setPassword } 
                        placeholder = 'e.g *****'
                        secure
                      />
                      <Text style = {styles.labelText}>Confirm Password</Text>
                      <AppTextInput
                        onChangeText = { setConfirmPassword } 
                        placeholder = 'e.g *****'
                        secure
                      />
                     
                      <AppButton 
                        title = 'Register'
                        press = {()=>{
                           
                          isValidUser = AuthServices.registerUser(username,Password);
                          isValidUser == true? navigation.navigate('Sign In'): navigation.navigate('WelcomeScreen') ;
                        
                        }}
                      />
                    </View>
                </View>
            </View>
        </View>    
    </View>
  );
};

export default SignUpScreen;