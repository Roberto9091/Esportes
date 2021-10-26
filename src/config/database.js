console.log(process.env.DATABASE_URL)
module.exports={
    dialect: "postgres",
    url: process.env.DATABASE_URL,
    host: "localhost",
    port: "5432",
    username: "postgres",
    password: "postgres",
    database: "esportes",
    define:{
        timestemps:true
    }
}