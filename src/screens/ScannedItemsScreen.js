import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../assets/styles/AppStyles';
import SubmitedItemLIst from '../component/otherComponent/SubmitedItemLIst';



const ScannedItemsScreen = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.topHomeView}><View style = {{ margin: 10, top: 10}}><Text style = {styles.logoText}>DatraStoco</Text></View></View>
      <View style = {styles.bottomHomeView}>
        <Text style = {styles.invoiceText}>Submited Orders</Text>
        <View style = {styles.invoiceBody}>
            <SubmitedItemLIst />
        </View>
      </View>
    </View>
  )
}

export default ScannedItemsScreen