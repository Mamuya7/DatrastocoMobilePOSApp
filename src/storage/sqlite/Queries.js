import { db } from "./Database";

class Queries {
    storeOrder = async () =>{
        db.transaction((tx)=>{
            tx.executeSql(
                "INSERT INTO dsOrders (ItemName, ItemCompany, ItemQts, TotalNumberOfItem , Price, TotalPrice, Status ) VALUES ('BAMATO UNGA WA NJANO','BAMATO LTD','1KG',12,2000,24000,'NOT SUBMITED');",
                [],
                (tx,results)=>{
                    console.log(results);
                },
                (tx,error)=>{
                    console.log(error);
                }
            
            )
        })
    }
    getOrders = async () =>{
        let s = new Promise((resolve,reject)=>{
            db.transaction( (tx) =>{
                tx.executeSql(
                    "SELECT * FROM dsOrders;" ,
                    //"SELECT name FROM sqlite_master WHERE type='table' AND name='dsOrders' ",
                    [], 
                    (tx,results) =>{
                       // console.log(results);
                        resolve(results)
                    },
                    (tx,error)=>{
                        reject(error);
                    }
                )
            })
        });   
        return s;  
    }
    
}

export default new Queries();