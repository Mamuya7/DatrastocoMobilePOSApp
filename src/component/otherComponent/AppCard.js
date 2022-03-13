import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/AppStyles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const AppCard = (props) => {
  return (
    <TouchableOpacity style = {styles.card } onPress={props.cardonPress}>
        <View >
            <Text style = {styles.cardlabelText}>{props.cardText}</Text>
        </View>
        <View style = {styles.subCard}>
          <View>
            <Icon name= {props.qrCodeName} size = {25} color = 'white' />
          </View>
        </View>
    </TouchableOpacity>  
  );
};

export default AppCard;
