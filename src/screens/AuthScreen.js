import { View, Text, Pressable, Alert, Modal } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../assets/styles/AppStyles';
import AppTextInput from '../component/coreComponent/AppTextInput';
import AppButton from '../component/coreComponent/AppButton';
import AuthServices from '../services/AuthServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthScreen = ({navigation}) => {

  const [username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)
  
  const getUser = async () => {
    try {
      const userObj = await AsyncStorage.getItem('User')
      let user = JSON.parse(userObj); 
      if(user.username == username && user.password == Password){
        navigation.navigate('Home'); 
      }else{
        setModalVisible(true)
      }  
    } catch(e) {
      console.log(e);
    }

  }

  return (
    <>
    <Modal
      visible = {modalVisible}
      animationType =  'slide'
      transparent = {true} 
    >
      <View style = {styles.loginWarning}>
        <Text style = {styles.warningText}>Incorrect username or password</Text>
        <Text style = {styles.warningText}>Please sign up first or enter correct sign in entries correctly. </Text>
        <AppButton 
         title = 'Ok'
         press = {() => {
           setModalVisible(false)
         }}
        />
      </View>
    </Modal>
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
                          getUser();
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
  </>
  );
};

export default AuthScreen;
