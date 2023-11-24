import mysql from 'mysql'
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'shop',
    password:""
})

db.connect((err)=>{
      err ? 
         console.log('Echec de connection à la base de donnée')
      :
         console.log('Connecté à la base de donnée')
})

export default db