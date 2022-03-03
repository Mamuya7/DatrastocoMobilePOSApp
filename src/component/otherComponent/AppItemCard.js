import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../assets/styles/AppStyles'
import AuthServices from '../../services/AuthServices'


const AppItemCard = ({ itemName,itemCompany, itemQts,  totalNumber }) => {

  const [price, setPrice] = useState('0')

  return (
    <View style = {styles.itemCard}>
        <View style = {{margin: 10}}>
         <Text style = {styles.itemText}>Product Name: <Text style = {styles.subItemText}>{ itemName } </Text></Text>
         <Text style = {styles.itemText}>Product Company: <Text style = {styles.subItemText}>{ itemCompany } </Text></Text>
         <Text style = {styles.itemText}>Product Qts: <Text style = {styles.subItemText}>{ itemQts } </Text></Text>
         <Text style = {styles.itemText}>Number Of Product: <Text style = {styles.subItemText}>{ totalNumber } </Text> </Text>
         <View style = {styles.invoicePrice}>
            <Text style = {styles.itemText}>Price: <Text style = {styles.subItemText}>TSh. </Text> </Text>
            <TextInput 
              style = {styles.invoicePriceInput} 
              placeholder = '0'
              placeholderTextColor={'#808080'}
              onChangeText = {(e) => setPrice(e)}
              keyboardType = 'numeric'
            />
         </View>
         <Text style = {[styles.itemText, {fontWeight: 'bold', fontSize: 15}]}>Total Price: TSh.{ AuthServices.totalPrice(price,totalNumber) } </Text>
        </View>
    </View>
  )
}

export default AppItemCard;