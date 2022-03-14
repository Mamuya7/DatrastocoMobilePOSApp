import Queries from "../storage/sqlite/Queries";
import scannedItems from "../data/scannedItems";


class AuthServices {
    

  getUnsubmitedOrders = async () => {
      var results = await Queries.getUnsubmitedOrders();
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

  getSubmitedOrders = async () =>{
    var results = await Queries.getSubmitedOrder();
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

  storeSubmitedScannedItem = async () => {
    var l = scannedItems.length;
    if(l > 0){
      for(var x=0; x<l; x++){
        await Queries.storeOrder(scannedItems[x]);
      }
    }else{
      return 'no scanned order';
    }

    scannedItems.length = 0;
  }

  totalPrice = (price, totalNumber) =>{ 
      return totalNumber*parseInt(price);
  }

  addOrder = (orderToBeAdded,totalNumberOfProduct) =>{
    var getLength = scannedItems.length;

    const newOrder = {
      id: getLength+1,
      itemName: orderToBeAdded.type,
      itemCompany: orderToBeAdded.data,
      itemQts: 'kg.1',
      totalNumber: totalNumberOfProduct,
      price:4000,
      totalPrice: 4000*totalNumberOfProduct
    }

    if(orderToBeAdded != null ){
      scannedItems.push(newOrder);
    }
    
  }

  updateObject = (index,price,totalNumber) => {
    var totalPrice = price*totalNumber;
    scannedItems[index].price = price;
    scannedItems[index].totalPrice = totalPrice;
    
  }

  clearOrder = () =>{
    scannedItems.length = 0;
  }

  removeOrder = (index) =>{
    scannedItems.splice(index,1); 
  }

  getOrdersLength = () =>{
    return scannedItems.length;
  }

}



export default new AuthServices();