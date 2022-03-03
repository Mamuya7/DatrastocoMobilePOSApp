import { View, FlatList } from 'react-native'
import React from 'react'
import AppItemCard from './AppItemCard'
import scannedItems from './../../data/scannedItems'
import AppButton from '../coreComponent/AppButton'
import { styles } from '../../assets/styles/AppStyles'
import AuthServices from '../../services/AuthServices'


const AppItemListCard = () => {
  const renderItem = ({item}) =>{
    return(
      <AppItemCard 
        itemName = { item.itemName }
        itemCompany = { item.itemCompany }
        itemQts = { item.itemQts }
        totalNumber = { item.totalNumber }
      />
    )
  }
  return (
    <View style = {styles.listConatiner}>
      <FlatList
        data={ scannedItems }
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style = {styles.invoiceButton}>
          <AppButton 
              title = 'Submit Order'
              press = { AuthServices.submitOrder(scannedItems) }
          />
          <AppButton 
              title = 'Cancel Order'
          />
      </View>
    </View> 

  )
}

export default AppItemListCard