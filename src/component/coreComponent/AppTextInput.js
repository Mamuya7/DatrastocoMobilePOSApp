import { TextInput } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/AppStyles';

const AppTextInput = (props) => {
  return (
    
        <TextInput 
            style = {styles.input}
            placeholder= {props.placeholder}
            placeholderTextColor='#808080' 
            secureTextEntry = {props.secure}
            onChangeText={props.onChangeText}
        />
    
  );
};

export default AppTextInput;
