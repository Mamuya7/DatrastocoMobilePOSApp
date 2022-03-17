import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from '../../assets/styles/AppStyles'
import AuthServices from '../../services/AuthServices'

const AppSubmitedItemCard = ({itemName, itemCompany, itemQts, totalNumber, price, totalPrice}) => {
  return (
    <View style = {styles.submitedItemCard}>
        <View style = {{margin: 10}}>
          <View style= {styles.itemTextCard}>
            <Text style = {styles.itemText}>Product Name: </Text>
            <Text style = {styles.subItemText}>{ itemName } </Text>
          </View>
          <View style= {styles.itemTextCard}>
            <Text style = {styles.itemText}>Product Company: </Text>
            <Text style = {styles.subItemText}>{ itemCompany } </Text>
          </View>
          <View style= {styles.itemTextCard}>
            <Text style = {styles.itemText}>Product Qts: </Text>
            <Text style = {styles.subItemText}>{ itemQts } </Text>
          </View>
          <View style= {styles.itemTextCard}>
            <Text style = {styles.itemText}>Number Of Product:  </Text>
            <Text style = {styles.subItemText}>{ totalNumber } </Text>
          </View>
          <View style= {styles.itemTextCard}>
            <Text style = {styles.itemText}>Price  </Text>
            <Text style = {styles.subItemText}>{ price } </Text>
          </View>
         <Text style = {[styles.itemText, {fontWeight: 'bold', fontSize: 15}]}>Total Price: TSh.{ totalPrice } </Text>
        </View>
    </View>
  )
}

export default AppSubmitedItemCard

