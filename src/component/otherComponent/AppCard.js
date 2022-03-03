import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/AppStyles';

const AppCard = (props) => {
  return (
    <TouchableOpacity style = {styles.card } onPress={props.cardonPress}>
        <View >
            <Text style = {styles.cardlabelText}>{props.cardText}</Text>
        </View>
        <View style = {styles.subCard}></View>
    </TouchableOpacity>  
  );
};

export default AppCard;
