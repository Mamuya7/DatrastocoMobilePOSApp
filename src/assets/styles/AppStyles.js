import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    minWidth: '47.5%',
    backgroundColor: 'orange',
    borderRadius: 20,
    top: 10,
    margin: 2,
    alignItems: 'center',
    padding: 5
  },

  buttonText: {
      color: 'white',
      padding: 2,
      fontWeight: 'bold',
      fontSize: 14
  },

  input: {
      backgroundColor:'#f0fff0',
      borderWidth: 1,
      borderColor: 'orange',
      borderRadius: 30,
      padding: 2,
      paddingLeft: 18,
      margin: 7,
      color: "#808080"

  },

  container: {
      flex: 1,
      backgroundColor: 'orange',
  },

  wContainer: {
    flex: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0fff0',
    borderBottomRightRadius: 100

},

textCreative: {
  fontWeight: 'bold',
  color: '#f0fff0',
  letterSpacing: 4,
  fontSize: 10
}, 

datrastock: {
  color: 'orange',
  fontWeight: 'bold',
  fontSize: 30,
  marginHorizontal: 20,
  letterSpacing: 1.5,
  marginTop: 7
},

textStyles: {
  color: 'black',
  marginHorizontal: '8%',
  marginTop: 20,
  fontWeight: 'bold', 
  fontSize: 15,
  letterSpacing: 11

},

grayView: {
  flex: 1,
  backgroundColor: '#f0fff0',
  borderTopLeftRadius: 50

},

creative: {
  alignItems: 'center',
  padding:2
},

authContainer: {
  backgroundColor: '#f0fff0',
  flex: 1,
},

topView: {
  backgroundColor: 'orange',
  flex: 5,
  borderBottomEndRadius: 50,
  borderBottomStartRadius: 50
},

bottomView: {
  backgroundColor: '#f0fff0',
  alignItems: 'center',
},

authBottomView: {
  backgroundColor: '#f0fff0',
  alignItems: 'center',
  flex: 7
},

loginContainer: {
  padding: 10,
  paddingBottom: 20,
  paddingTop:20,
  width: 300,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#e5e4e2',
  elevation: 0.1,
  borderRadius: 12,

},

logoText: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 30,
  letterSpacing: 1.5,
  marginBottom: 4
},

wrapContainer: {
  bottom: '29%'
  
},

labelText: {
    margin: 5,
    color: '#808080',
    fontSize: 15
},
cardlabelText: {
  top: 6,
  margin: 5,
  color: '#808080',
  fontSize: 15
},
topHomeView: {
  backgroundColor: 'orange',
  zIndex: 1,
  borderBottomLeftRadius: 13,
  borderBottomRightRadius: 13,
  marginLeft: 5,
  marginRight: 5
  
},

bottomHomeView: {
  flex: 7,
  backgroundColor: '#f0fff0',
  borderTopStartRadius: 20,
  borderTopEndRadius: 20,
  paddingTop: 10,
  

},

card: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  elevation: 2,
  backgroundColor: '#fff',
  height: 40,
  margin: 10,
  marginTop: 0,
  borderRadius: 10
},

subCard: {
  backgroundColor: 'orange',
  width: 50,
  borderRadius: 10,
  margin: 1.5

},

centerText: {
  flex: 1,
  fontSize: 18,
  padding: 32,
  color: '#777'
},
textBold: {
  fontWeight: '500',
  color: '#000'
},
buttonText: {
  fontSize: 15,
  color: '#f0fff0'
},
buttonTouchable: {
  padding: 16
},
modal: {
  backgroundColor: '#f0fff0',
  padding: 15,
  borderRadius: 15,
  minHeight:550,
  justifyContent: 'center',
  margin: 10,
  top: '10%',
  elevation: 2,

},

modalText: {
  color: '#808080',
  alignSelf: 'flex-start',
  margin: 2
},

closeModal: {
  alignSelf: 'flex-end',
  position: 'relative',
  bottom: '33.5%',
  left: '4%',
  borderRadius: 50,
  elevation:5,
  backgroundColor: '#f0fff0'
},

itemCard: {
  backgroundColor:'white',
  margin: 10,
  marginTop: 5,
  borderRadius: 7,
  justifyContent: 'center',
  elevation: 3
  
  
},

itemText: {
  color: 'orange',
  fontSize: 13,
  
},

subItemText: {
  color: '#808080'
},

listConatiner: {
  backgroundColor: 'white',
  borderRadius: 10,
  flex: 1
},

invoiceText: {
  color: '#808080',
  alignSelf: 'center',
  fontWeight: 'normal',
  fontSize: 15,
  marginBottom: 5,

},

invoiceBody: {
  backgroundColor: '#fff',
  flex: 1,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  
},

invoicePrice: {
  flexDirection: 'row',
  marginTop: 2
},

invoicePriceInput: {
  borderWidth: 0.3,
  padding: 0,
  borderColor: 'orange',
  borderRadius: 5,
  width: 150,
  paddingLeft: 6,
  color: '#808080'
},

invoiceButton: {
  flexDirection: 'row',
  justifyContent: 'center',
  margin: 6,
  elavation: 1,
  bottom: 10,
  
},

invoiceListContainer: {
  flex: 1
},

submitedItemCard: {
  backgroundColor:'white',
  margin: 10,
  marginTop: 5,
  borderRadius: 15,
  justifyContent: 'center',
  borderBottomWidth: 0.3,
  borderColor: 'orange'
}


});

export { styles };
