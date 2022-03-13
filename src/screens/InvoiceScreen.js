import { View, Text, Modal, Pressable } from 'react-native';
import React, {useState} from 'react';
import { styles } from '../assets/styles/AppStyles';
import AppItemListCard from '../component/otherComponent/AppItemListCard';
import AppButton from '../component/coreComponent/AppButton';
import AuthServices from '../services/AuthServices';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const InvoiceScreen = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [scanmodalVisible, setScanModalVisible] = useState(false);
  const [submitModalVisible, setSubmitModalVisible] = useState(false);
  const [submitedModalVisible, setSubmitedModalVisible] = useState(false);
  const [emptyToSubmitOrderModal, setEmptyToSubmitOrderModal] = useState(false);

  return (
  <>
    <View style = {styles.container}>
      <View style = {styles.topHomeView}><View style = {{ margin: 10, top: 10}}><Text style = {styles.logoText}>DatraStoco</Text></View></View>
      <View style = {styles.bottomHomeView}>
          <Modal
            visible = {modalVisible}
            animationType =  'slide'
            transparent = {true} 
          >
            <View style = {styles.loginWarning}>
              <Text style = {styles.warningText}>Warning..!</Text>
              <Text style = {styles.warningText}>Are you sure? you want to cancel the orders </Text>
              <View style = {styles.modalButton}>
                <AppButton 
                title = 'Yes'
                press = {() => {
                  AuthServices.clearOrder();
                  setModalVisible(false);
                  setScanModalVisible(true);
                }}
                />
                <AppButton 
                title = 'No'
                press = {() => {
                  setModalVisible(false);
                }}
                />
              </View>
            </View>
          </Modal>
          <Modal
            visible = {scanmodalVisible}
            animationType =  'slide'
            transparent = {true} 
          >
            <View style = {styles.loginWarning}>
              <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{alignItems: 'center'}}>
                  <Text style = {styles.warningText}>Orders are cleared..</Text>
                  <Text style = {styles.warningText}>Do you want to scan again?</Text>
                  <Text style = {styles.warningText}>Click the button bellow to scan again </Text>
                </View>
                <View >
                  <View style = {[styles.cancelCard, { left: '200%', bottom: '50%'}]}>
                    <Pressable onPress={()=>setScanModalVisible(false)}>
                      <Icon name = "cancel" color = 'orange' size = {20} />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style = {styles.modalButton}>
                <AppButton 
                title = 'Scan again'
                press = {() => {
                  setScanModalVisible(false)
                  navigation.navigate('Scan');
                }}
                />
                
              </View>
            </View>
          </Modal>
          <Modal
            visible = {submitModalVisible}
            animationType =  'slide'
            transparent = {true} 
          >
            <View style = {styles.loginWarning}>
              <Text style = {styles.warningText}>Warning..!</Text>
              <Text style = {styles.warningText}>Are you sure? you want to submit the orders </Text>
              <View style = {styles.modalButton}>
                <AppButton 
                title = 'Yes'
                press = {() => {
                  AuthServices.storeSubmitedScannedItem();
                  setSubmitModalVisible(false);
                  setSubmitedModalVisible(true);
                }}
                />
                <AppButton 
                title = 'No'
                press = {() => {
                  setSubmitModalVisible(false);
                }}
                />
              </View>
            </View>
          </Modal>
          <Modal
            visible = {submitedModalVisible}
            animationType =  'slide'
            transparent = {true} 
          >
            <View style = {styles.loginWarning}>
              <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{alignItems: 'center'}}>
                  <Text style = {styles.warningText}>Orders are submited..</Text>
                  <Text style = {styles.warningText}>Click the button bellow to view orders </Text>
                </View>
                <View >
                  <View style = {[styles.cancelCard, { left: '200%', bottom: '50%'}]}>
                    <Pressable onPress={()=>setSubmitedModalVisible(false)}>
                      <Icon name = "cancel" color = 'orange' size = {20} />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style = {styles.modalButton}>
                <AppButton 
                title = 'Submited Orders'
                press = {() => {
                  setSubmitedModalVisible(false)
                  navigation.navigate('Scanned Items');
                }}
                />
                
              </View>
            </View>
          </Modal>
          <Modal
            visible = {emptyToSubmitOrderModal}
            animationType =  'slide'
            transparent = {true} 
          >
            <View style = {styles.loginWarning}>
              <Text style = {styles.warningText}>No orders </Text>
              <View style = {styles.modalButton}>
                <AppButton 
                title = 'Ok'
                press = {() => {
                  setEmptyToSubmitOrderModal(false);
                }}
                />
                
              </View>
            </View>
          </Modal>
          <Text style = {styles.invoiceText}>Orders</Text>
          <AppItemListCard 
            press = {()=>{
              navigation.navigate('Scan')
            }}
          />
          <View style = {{backgroundColor: '#fff', borderTopWidth: 0.3, borderColor: 'orange'}}>
            <View style = {styles.invoiceButton}>
              <AppButton 
                  title = 'Submit Order'
                  press = {()=>{
                    var l = AuthServices.getOrdersLength();
                    if(l>0){
                      setSubmitModalVisible(true);
                    }else{
                      setEmptyToSubmitOrderModal(true);
                    }
                  }}
              />
              <AppButton 
                  title = 'Cancel Order'
                  press = {()=>{
                    var l = AuthServices.getOrdersLength();
                    if(l>0){
                      setModalVisible(true);
                    }else{
                      setEmptyToSubmitOrderModal(true);
                    }
                  }}
              />
            </View>
          </View>
      </View>
    </View>
  </>
  )
}

export default InvoiceScreen