import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../assets/styles/AppStyles';
import AppCard from '../component/otherComponent/AppCard';

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.topHomeView}><View style = {{ margin: 10, top: 10}}><Text style = {styles.logoText}>DatraStoco</Text></View></View>
      <View style = {styles.bottomHomeView}>
        <AppCard 
          cardText = 'Scan Product'
          cardonPress = {() => navigation.navigate('Scan')}
        />
        <AppCard 
          cardText = 'Total scanned product'
        />
        <AppCard 
          cardText = 'Total scanned product'
        />
      </View>
    </View>
  );
};

export default HomeScreen;
