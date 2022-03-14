import SQlite from "react-native-sqlite-storage";
import Tables from "./Tables";

const db = SQlite.openDatabase(
    {
      name: 'DatrastocoDb',
      location: 'default'
    },
    () =>{
      Tables.createTable_dsOrders();
    },
    e=>{
      console.log(e);
    }
  )

  export { db } ;