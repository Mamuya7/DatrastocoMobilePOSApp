import { View, FlatList } from 'react-native'
import React from 'react'
import AppSubmitedItemCard from './AppSubmitedItemCard'
import submitedItemsOrder from './../../data/submitedItemsOrder'
import { styles } from '../../assets/styles/AppStyles'



const SubmitedItemLIst = () => {
    const renderItem = ({item}) =>{
        return(
          <AppSubmitedItemCard
            itemName = { item.itemName }
            itemCompany = { item.itemCompany }
            itemQts = { item.itemQts }
            price = { item.price }
            totalNumber = { item.totalNumber }
            totalPrice = { item.totalPrice}
          />
        )
      }
      return (
        <View style = {styles.listConatiner}>
          <FlatList
            data={ submitedItemsOrder }
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
    
      )
}

export default SubmitedItemLIst