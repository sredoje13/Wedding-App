import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("alltasks.db");
const secdatabase = SQLite.openDatabase("coupless.db");
export function initdatabase() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS alltasks(
            id INTEGER PRIMARY KEY NOT NULL,
            important BOOLEAN,
            date TEXT NOT NULL,
            name TEXT NOT NULL
        )`,
        [],
        (_, result) => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
export function initdatabaseCouple() {
  const promise = new Promise((resolve, reject) => {
    secdatabase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS coupless(
            id INTEGER PRIMARY KEY NOT NULL,
             name TEXT NOT NULL,
             age INTEGER NOT NULL,
             sex TEXT NOT NULL,
             picture TEXT,
             numofMember INTEGER NOT NULL
         )`,
        [],
        (_, result) => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
export function getCouple() {
  const promise = new Promise((resolve, reject) => {
    secdatabase.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM coupless`,
        [],
        (_, rez) => {
          resolve(rez.rows._array);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
export function insertCouple(values) {
  const promise = new Promise((resolve, reject) => {
    secdatabase.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO coupless ( 
      name,
      age,
      sex,
      picture,
      numofMember) VALUES (?,?,?,?,?) `,
        [
          values.name,
          values.age,
          values.sex,
          values.picture,
          values.number
        ],
        (_, rez) => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
export function updateCouple(values,id){
 const promise=new Promise((resolve,reject)=>{
 secdatabase.transaction((tx)=>{
  tx.executeSql(
  `UPDATE coupless SET 
  name='${values.name}', 
  age=${values.age},
  picture='${values.picture}',
  sex='${values.sex}',
  numofMember=${values.number}
  WHERE id=${id}`,[],
  (_,res,r)=>{
    resolve()
  },(_,err)=>{
    reject(err)
  })
 })

 })

return promise
}
export function deleteCouple(id){
  const promise=new Promise((resolve,reject)=>{
  secdatabase.transaction((tx)=>{
   tx.executeSql(
   `DELETE FROM coupless WHERE id=${id}`,[],
   (_,res)=>{
     resolve()
   },(_,err)=>{
     reject(err)
   })
  })
 
  })
 
 return promise
 }
 export function getalltasks(){
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM alltasks`,
        [],
        (_,rez) => {
          resolve(rez.rows._array);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}
export function insertalltasks(values) {
   const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO alltasks ( 
      name,
      date
     ) VALUES (?,?) `,
        [
          values.name,
          values.date,
        ],
        (_,rez) => {
          resolve(rez);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise; 
}
export function updateOneTask(id,values) {
  const promise = new Promise((resolve, reject) => {
   database.transaction((tx) => {
     tx.executeSql(
       `UPDATE alltasks SET name="${values.name}", date="${values.date}" WHERE id=${id}`,
       [],
       (_,rez) => {
         resolve();
       },
       (_, err) => {
         reject(err);
       }
     );
   });
 });
 return promise; 
}
export function deleteOneTask(id) {
  const promise = new Promise((resolve, reject) => {
   database.transaction((tx) => {
     tx.executeSql(
       `DELETE FROM alltasks WHERE id=${id}`,
       [],
       (_,rez) => {
         resolve();
       },
       (_, err) => {
         reject(err);
       }
     );
   });
 });
 return promise; 
}
export function updateFavitems(id,values) {
  const promise = new Promise((resolve, reject) => {
   database.transaction((tx) => {
     tx.executeSql(
       `UPDATE alltasks SET important=${!values} WHERE id=${id}`,
       [],
       (_,rez) => {
        console.log(rez)
         resolve(rez);
       },
       (_, err) => {
         reject(err);
       }
     );
   });
 });
 return promise; 
}
/*  setisdisabled(true);
    await updateFavitems(item.id,!item.important)
   dispatch(actions.updateFavitem(item.id))*/