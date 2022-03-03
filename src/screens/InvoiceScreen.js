import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../assets/styles/AppStyles';
import AppItemListCard from '../component/otherComponent/AppItemListCard';

const InvoiceScreen = () => {
  return (
  <View style = {styles.container}>
    <View style = {styles.topHomeView}><View style = {{ margin: 10, top: 10}}><Text style = {styles.logoText}>DatraStoco</Text></View></View>
    <View style = {styles.bottomHomeView}>
        <Text style = {styles.invoiceText}>Invoice Order</Text>
        <AppItemListCard />
    </View>
  </View>
  )
}

export default InvoiceScreen