import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from '../../assets/styles/AppStyles'
import AuthServices from '../../services/AuthServices'

const AppSubmitedItemCard = ({itemName, itemCompany, itemQts, totalNumber, price, totalPrice}) => {
  return (
    <View style = {styles.submitedItemCard}>
        <View style = {{margin: 10}}>
         <Text style = {styles.itemText}>Product Name: <Text style = {styles.subItemText}>{ itemName } </Text></Text>
         <Text style = {styles.itemText}>Product Company: <Text style = {styles.subItemText}>{ itemCompany } </Text></Text>
         <Text style = {styles.itemText}>Product Qts: <Text style = {styles.subItemText}>{ itemQts } </Text></Text>
         <Text style = {styles.itemText}>Number Of Product: <Text style = {styles.subItemText}>{ totalNumber } </Text> </Text>
         <Text style = {styles.itemText}>Price <Text style = {styles.subItemText}>{ price } </Text> </Text>
         <Text style = {[styles.itemText, {fontWeight: 'bold', fontSize: 15}]}>Total Price: TSh.{ totalPrice } </Text>
        </View>
    </View>
  )
}

export default AppSubmitedItemCard