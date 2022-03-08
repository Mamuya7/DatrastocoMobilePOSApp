import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppItemCard from './AppItemCard';
import AppButton from '../coreComponent/AppButton';
import { styles } from '../../assets/styles/AppStyles';
import AuthServices from '../../services/AuthServices';

const AppItemListCard = () => {
  const [itm, setItem] = useState();

  useEffect(()=>{
    const orders = async (oItems) =>{
      oItems = await AuthServices.getOrders();
      setItem(oItems);
    }
    orders();
  },[]);
  
  const renderItem = ({item}) =>{
    return(
      <AppItemCard 
        itemName = { item.ItemName }
        itemCompany = { item.ItemCompany }
        itemQts = { item.ItemQts }
        totalNumber = { item.TotalNumberOfItem }
        price = {""+item.Price+""}
        
      />
    )
  }
  return (
    <View style = {styles.listConatiner}>
      <FlatList
        data={ itm }
        renderItem={renderItem}
        //keyExtractor={item => item.Id}
      />
      <View style = {styles.invoiceButton}>
          <AppButton 
              title = 'Submit Order'
              press = {()=>{
                AuthServices.getOrders();
              }}
          />
          <AppButton 
              title = 'Cancel Order'
          />
      </View>
    </View> 

  )
}

export default AppItemListCard