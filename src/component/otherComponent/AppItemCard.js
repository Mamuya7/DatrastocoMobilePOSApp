import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../assets/styles/AppStyles'
import AuthServices from '../../services/AuthServices'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const AppItemCard = ({ itemName,itemCompany, itemQts,  totalNumber, index, givenPrice, press}) => {
  const [modifiedPrice, setModifiedPrice] = useState(givenPrice)

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
              placeholderTextColor={'#808080'}
              onChangeText = {(e) => {
                setModifiedPrice(e);
                AuthServices.updateObject(index,e,totalNumber);
              }}
              keyboardType = 'numeric'
              placeholder= {""+givenPrice+""}
            />
         </View>
         <Text style = {[styles.itemText, {fontWeight: 'bold', fontSize: 15}]}>Total Price: TSh.{ AuthServices.totalPrice(modifiedPrice,totalNumber) } </Text>
        </View>
        <View >
          <View style = {styles.cancelCard}>
            <Pressable onPress = {press}
            >
              <Icon name = "cancel" color = 'orange' size = {20} />
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default AppItemCard;