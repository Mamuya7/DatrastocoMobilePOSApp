import { db } from "./Database";

class Tables {

    createTable_dsOrders = () =>{
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "dsOrders "
                + "(Id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, ItemName TEXT, ItemCompany TEXT, ItemQts TEXT, TotalNumberOfItem INTEGER, Price INTEGER, TotalPrice INTEGER, Status TEXT );"
            );
        });
    }
}

export default new Tables();