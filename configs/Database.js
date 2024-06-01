const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("travelinv-mysql", "azure_admin", "Baitaplonso7", {
  host: "travelinv.mysql.database.azure.com",
  dialect: "mysql",
  logging: false
});


const ConnectionDatabase = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

ConnectionDatabase()
