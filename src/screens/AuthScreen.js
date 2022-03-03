import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../assets/styles/AppStyles';
import AppTextInput from '../component/coreComponent/AppTextInput';
import AppButton from '../component/coreComponent/AppButton';
import AuthServices from '../services/AuthServices';

const AuthScreen = ({navigation}) => {

  const [username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  var isValidUser = 0;


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
                      
                      <AppButton 
                        title = 'Sign In'
                        press = {()=>{
                          isValidUser = AuthServices.login(username,Password);
                          isValidUser == 1 ? navigation.navigate('Home'): navigation.navigate('Sign In');
                        }}
                      />
            
                      <View style = {{flexDirection: 'row',justifyContent:'center', marginTop: 20}}>
                          <Pressable ><Text style = { styles.labelText}>Forgot Password?</Text></Pressable>
                          <View style ={{padding: 1, backgroundColor: 'orange', height: 25, marginTop: 2}}></View>
                          <Pressable onPress={() => navigation.navigate('Sign Up')}><Text style = { styles.labelText}>Sign Up</Text></Pressable>
                      </View>
                    </View>
                </View>
            </View>
        </View>    
    </View>
  );
};

export default AuthScreen;
