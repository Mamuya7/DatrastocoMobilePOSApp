import { View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppSubmitedItemCard from './AppSubmitedItemCard'
import { styles } from '../../assets/styles/AppStyles'
import AuthServices from '../../services/AuthServices'
import EmptySubimitedMessage from './EmptySubimitedMessage'



const SubmitedItemLIst = () => {
  const [itm, setItem] = useState('');

  useEffect(()=>{
    const submitedOrders = async (oItems) =>{
      oItems = await AuthServices.getSubmitedOrders();
        if(oItems!= 'undifined'){
          setItem(oItems);
        }
      
    }
    submitedOrders();
  },[]);

    const renderItem = ({item}) =>{
        return(
          <AppSubmitedItemCard
            itemName = { item.ItemName }
            itemCompany = { item.ItemCompany }
            itemQts = { item.ItemQts }
            price = { item.Price }
            totalNumber = { item.TotalNumberOfItem }
            totalPrice = { item.TotalPrice}
          />
        )
      }
      return (
        <View style = {styles.listConatiner}>
          <FlatList
            data={ itm }
            renderItem={renderItem}
            // keyExtractor={item => item.id}
            ListEmptyComponent = {<EmptySubimitedMessage />}
          />
        </View>
    
      )
}

export default SubmitedItemLIst