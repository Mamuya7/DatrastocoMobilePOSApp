import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppItemCard from './AppItemCard';
import { styles } from '../../assets/styles/AppStyles';
import AuthServices from '../../services/AuthServices';
import scannedItems from '../../data/scannedItems';
import EmptyMessage from './EmptyMessage';



const AppItemListCard = ({press}) => {
  // const [itm, setItem] = useState();

  // useEffect(()=>{
  //   const unsubmitedOrders = async (oItems) =>{
  //     oItems = await AuthServices.getUnsubmitedOrders();
  //     setItem(oItems);
  //   }
  //   unsubmitedOrders();
  // },[]);
  
  const renderItem = ({item}) =>{
    return(
      <AppItemCard 
        itemName = { item.itemName }
        itemCompany = { item.itemCompany }
        itemQts = { item.itemQts }
        totalNumber = { item.totalNumber }
        index = {scannedItems.map(object => object.id).indexOf(item.id)}
        givenPrice = {item.price}
        press = {()=>{
          AuthServices.removeOrder(scannedItems.map(object => object.id).indexOf(item.id));
          
        }}
      />
      
    )
  }
  return (
    <View style = {styles.listConatiner}>
      <FlatList
        data={ scannedItems }
        renderItem={renderItem}
        //keyExtractor={item => item.Id}
        refreshing = {true}
        ListEmptyComponent = {<EmptyMessage navigation = {press} />}
      />
    </View> 

  )
}

export default AppItemListCard