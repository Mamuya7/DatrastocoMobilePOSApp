import users from "../data/users";
import scannedItems from "../data/scannedItems";
import submitedItemsOrder from "../data/submitedItemsOrder";

class AuthServices {
  login = (username,password) => {

    var result = 0;
      for(x in users){
         (username == users[x].username && password == users[x].password) ? result = 1: result = 0;
        }
      return result;
      
  }

  registerUser = (username,password) => {
    
    var addedNewUser = false;
    var oldLength = users.length;

    const newUser = {
      username: username,
      password: password
    }

    var newLenght = users.push(newUser);
    newLenght > oldLength ? addedNewUser = true: addedNewUser = false;
    
    return addedNewUser;
    
  }

  addScannedItems = (takenData,totalNumberOfProduct) => {
    var isItemAdded =  false;
    var getId = scannedItems.length;

    const newData = {
      id: getId+1,
      itemName: takenData.type,
      itemCompany: takenData.data,
      itemQts: 'kg.1',
      totalNumber: totalNumberOfProduct,
    }

    scannedItems.push(newData) > getId? isItemAdded = true: isItemAdded = false;
    return isItemAdded;

  }

  totalPrice = (price, totalNumber) =>{ 
      return totalNumber*parseInt(price);
  }

  submitOrder = (toBeSubmitedOrderData, price, totalPrice) =>{

    var x =  toBeSubmitedOrderData.length;
    var y = 0;
    var getId = submitedItemsOrder.length;
    var isSubmited = false;

    for(y=0; y>x; y++){
      const submitedData = {
        id: getId+1,
        itemName: toBeSubmitedOrderData.itemName,
        itemCompany: toBeSubmitedOrderData.itemCompany,
        itemQts: toBeSubmitedOrderData.itemQts,
        totalNumber: toBeSubmitedOrderData.totalNumber,
        price: price,
        totalPrice: totalPrice
      }
      submitedItemsOrder.push(submitedData)>getId ? isSubmited = true: isSubmited = false;
    }
    
  }
}

export default new AuthServices();