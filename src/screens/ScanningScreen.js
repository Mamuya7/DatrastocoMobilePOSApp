import { View, Text, Modal, Pressable, Alert, TextInput ,} from 'react-native';
import React, { Component } from 'react';
import { styles } from '../assets/styles/AppStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import AppButton from '../component/coreComponent/AppButton';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AuthServices from '../services/AuthServices';


export class ScanningScreen extends Component {
 
  state = {
    scannedData: '',
    modalVisible: false,
    totalNumberOfProduct: '1'
  };

  render() {
    return (
      <>
      <View style = {styles.container}>
        <View style = {styles.topHomeView}><View style = {{ margin: 10, top: 10}}><Text style = {styles.logoText}>DatraStoco</Text></View></View>
        <View style = {styles.bottomHomeView}>
          <Modal
            visible = {this.state.modalVisible}
            animationType = 'slide'
            transparent = { true }
          >
            <View style = {styles.modal}>
              <Pressable style = {styles.closeModal} onPress = {() => {
                this.setState({modalVisible: false});
                this.scanner.reactivate();
                }}>
                <View >
                  <Icon name = 'cancel' size = {30} color = 'orange' />
                </View>
              </Pressable>
              <View>
               <Text style = {styles.modalText}><Text style = {{color: 'orange'}}>Product Name: </Text>{ this.state.scannedData.type }</Text>
               <Text style = {styles.modalText}><Text style = {{color: 'orange'}}>Prouct Company: </Text>{ this.state.scannedData.data }</Text>
              <Text style = {styles.modalText}><Text style = {{color: 'orange'}}>Product Qts:  </Text>{ this.state.scannedData.rawData }</Text>
               <View style = {{flexDirection: 'row'}}>
                   <Text style = {[styles.modalText,{marginTop: 7.5}]}><Text style = {{color: 'orange'}}>Total Number Of Product:   </Text></Text>
                   <TextInput 
                    style = {{borderBottomWidth: 1, padding: 1, borderColor: '#808080', color: '#808080', }} 
                    keyboardType = 'numeric'
                    onChangeText = {(e) => this.setState({ totalNumberOfProduct: e }) }
                    placeholder = '1'
                    placeholderTextColor='#808080'
                    />
                </View>
              </View>
              <View>
                 <AppButton 
                    title = 'Continue To Scan'
                    press = {() => {
                      this.setState({modalVisible: false});
                      AuthServices.addOrder(this.state.scannedData,this.state.totalNumberOfProduct);
                      this.scanner.reactivate();
                    }}
                  />
                  <AppButton 
                    title = 'Invoice'
                    press = {() => {
                      this.setState({modalVisible: false});
                      AuthServices.addOrder(this.state.scannedData,this.state.totalNumberOfProduct);
                      this.props.navigation.navigate('Invoice')
                    }}
                    
                  />

                  <AppButton 
                    title = 'Dismiss'
                    press = {() => {
                      this.setState({modalVisible: false});
                      this.scanner.reactivate();
                    }}
                    
                  />
              </View>
            </View>
          </Modal>
          <QRCodeScanner
            onRead={ (e) => {
              this.setState({scannedData: e})
              this.setState({modalVisible: true})

            }}
            ref={(node) => { this.scanner = node }}
            fadeIn = {false}
            flashMode={RNCamera.Constants.FlashMode.auto}
            topContent = {
              <Text style = {{color: '#808080'}}> Scan QRcode OR BarCode here.. </Text>
            }
            bottomContent = {
              <View style = {{flexDirection: 'row'}}>
                <AppButton 
                title = 'Submited Order'
                press = {() =>this.props.navigation.navigate('Scanned Items')}
              />

              <AppButton 
                title = 'Invoice'
                press = {() => this.props.navigation.navigate('Invoice')}
              />
              </View>
              
            }

            showMarker = {true}
          />
        </View>
      </View>
      </>
    );
  }
}

export default ScanningScreen

