import { View, Text, Modal, Pressable, Alert, TextInput ,} from 'react-native';
import React, { useState, useEffect } from 'react'
import { styles } from '../assets/styles/AppStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import AppButton from '../component/coreComponent/AppButton';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AuthServices from '../services/AuthServices';
import { db } from '../storage/sqlite/Database';


const ScanningScreen = ({navigation}) => {
  const [ scannedData , setScannedData ] = useState(''); 
  const [ modalVisible , setModalVisible ] = useState(false);
  const [ scan , setScan ] = useState(false);
  const [ totalNumberOfProduct , setTotalNumberOfProduct ] = useState('1')

  useEffect(()=>{
    createTable();
    //setOrder();
  },[])

  const createTable = () =>{
    db.transaction((tx) =>{
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "dsOrders "
        + "(Id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, ItemName TEXT, ItemCompany TEXT, ItemQts TEXT, TotalNumberOfItem INTEGER, Price INTEGER, TotalPrice INTEGER, Status TEXT );"
      );
    });
  }

  const setOrder = async () =>{
    try{
     db.transaction((tx) =>{
       tx.executeSql(
         "INSERT INTO dsOrders (ItemName, ItemCompany, ItemQts, TotalNumberOfItem, Price, TotalPrice, Status) VALUES ('KOROSHO','AZAM LTD','1KG',3,1000,3000,'NOT SUBMITED');"
       )
     })
    }catch(e){
      console.log(e);
    }
  }

  return (
  <>
    <View style = {styles.container}>
      <View style = {styles.topHomeView}><View style = {{ margin: 10, top: 10}}><Text style = {styles.logoText}>DatraStoco</Text></View></View>
      <View style = {styles.bottomHomeView}>
          <Modal
          transparent = {true}
          animationType='slide'
          visible = {modalVisible}
          >
            <View style = {styles.modal}>
              <Pressable style = {styles.closeModal} onPress = {() => setModalVisible(!modalVisible)}>
                <View >
                  <Icon name = 'cancel' size = {30} color = 'orange' />
                </View>
              </Pressable>
              <View>
                <Text style = {styles.modalText}><Text style = {{color: 'orange'}}>Product Name: </Text>{ scannedData.type }</Text>
                <Text style = {styles.modalText}><Text style = {{color: 'orange'}}>Prouct Company: </Text>{ scannedData.data }</Text>
                <Text style = {styles.modalText}><Text style = {{color: 'orange'}}>Product Qts:  </Text>{ scannedData.rawData }</Text>
                <View style = {{flexDirection: 'row'}}>
                  <Text style = {[styles.modalText,{marginTop: 7.5}]}><Text style = {{color: 'orange'}}>Total Number Of Product:   </Text></Text>
                  <TextInput 
                    style = {{borderBottomWidth: 1, padding: 1, borderColor: '#808080', color: '#808080', }} 
                    keyboardType = 'numeric'
                    onChangeText = {(e) => setTotalNumberOfProduct(e) }
                    placeholder = '1'
                    placeholderTextColor='#808080'
                    />
                </View>
              </View>
              <View>
                  <AppButton 
                    title = 'Continue To Scan'
                    press = {() => {
                      setModalVisible(!modalVisible);
                      AuthServices.addScannedItems(scannedData,totalNumberOfProduct)
                    }}
                  />
                  <AppButton 
                    title = 'Invoice'
                    press = {() => {
                      setModalVisible(!modalVisible)
                      navigation.navigate('Invoice')
                      AuthServices.addScannedItems(scannedData,totalNumberOfProduct)
                    }}
                  />
              </View>
            </View>
          </Modal>
        <QRCodeScanner
            onRead={ (e) => {
              setScannedData(e);
              setOrder();
              setModalVisible(!modalVisible);

            }}
            reactivate = {scan}
            fadeIn = {false}
            flashMode={RNCamera.Constants.FlashMode.auto}
            topContent = {
              <Text style = {{color: '#808080'}}> Scan QRcode OR BarCode here.. </Text>
            }
            bottomContent = {
              <View style = {{flexDirection: 'row'}}>
                <AppButton 
                title = 'Submited Order'
                press = {() =>navigation.navigate('Scanned Items')}
              />

              <AppButton 
                title = 'Invoice'
                press = {() => navigation.navigate('Invoice')}
              />
              </View>
              
            }

            showMarker = {true}
          />
      </View>
    </View>
  </>
  )
}

export default ScanningScreen