import { db } from "./Database";

class Queries {
    storeOrder = async (dataToBeStored) =>{
        db.transaction((tx)=>{
            tx.executeSql(
                "INSERT INTO dsOrders (ItemName, ItemCompany, ItemQts, TotalNumberOfItem , Price, TotalPrice, Status ) VALUES (?,?,?,?,?,?,'SUBMITED');",
                [dataToBeStored.itemName,dataToBeStored.itemCompany,dataToBeStored.itemQts,dataToBeStored.totalNumber,dataToBeStored.price,dataToBeStored.totalPrice],
                (tx,results)=>{
                    console.log(results);
                },
                (tx,error)=>{
                    console.log(error);
                }
            
            )
        })
    }
    getUnsubmitedOrders = async () =>{
        let unSubmitedOrdersPromise = new Promise((resolve,reject)=>{
            db.transaction( (tx) =>{
                tx.executeSql(
                    "SELECT * FROM dsOrders WHERE Status = 'NOT SUBMITED';" ,
                    [], 
                    (tx,results) =>{
                        resolve(results)
                    },
                    (tx,error)=>{
                        reject(error);
                    }
                )
            })
        });   
        return unSubmitedOrdersPromise;  
    }

    getSubmitedOrder = async () =>{
        let submitedOrdersPromise = new Promise((resolve,reject)=>{
            db.transaction( (tx) =>{
                tx.executeSql(
                    "SELECT * FROM dsOrders WHERE Status='SUBMITED';" ,
                    [], 
                    (tx,results) =>{
                        resolve(results)
                    },
                    (tx,error)=>{
                        reject(error);
                    }
                )
            })
        });   
        return submitedOrdersPromise;  
    }
    
}

export default new Queries();