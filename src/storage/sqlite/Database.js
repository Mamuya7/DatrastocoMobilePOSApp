import SQlite from "react-native-sqlite-storage";

const db = SQlite.openDatabase(
    {
      name: 'DatrastocoDb',
      location: 'default'
    },
    () =>{},
    e=>{
      console.log(e);
    }
  )

  export { db } ;