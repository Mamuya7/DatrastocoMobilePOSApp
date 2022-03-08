import users from "../data/users";
import scannedItems from "../data/scannedItems";
import submitedItemsOrder from "../data/submitedItemsOrder";
import Queries from "../storage/sqlite/Queries";

class AuthServices {
  getOrders = async () => {
      var results = await Queries.getOrders();
      var l = results.rows.length;
      const items = [];
      for(var x=0; x<l; x++){
        var currentItem = {
          'ItemName':results.rows.item(x).ItemName,
          'ItemCompany':results.rows.item(x).ItemCompany,
          'ItemQts':results.rows.item(x).ItemQts,
          'TotalNumberOfItem':results.rows.item(x).TotalNumberOfItem,
          'Price':results.rows.item(x).Price,
          'TotalPrice':results.rows.item(x).TotalPrice,
          'Status':results.rows.item(x).Status
        }
        items.push(currentItem);
      }

      if(items.length!=0){
        return items;
      }else{
        console.log('no orders recorded');
      }
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