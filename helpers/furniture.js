const DB = require('../classes/Db');
const Query = require('../classes/Querry');
const { randomInt } = require('../helpers/utils');

const config = require('../config');
const db = new DB(config.db);

const queryFurniture = new Query(config.tables.furniture);
const queryFurnitureType = new Query(config.tables.furnitureType);
const queryFurnitureStorage = new Query(config.tables.furnitureStorage);

  const findAll = async (request, response) => {
      const res = await db.select(queryFurniture.SelectAllFurniture());
      response.status(200).json(res);
  }

  const insertData = (request, response) => {
      let dataToInsert = '';
      let dataToStorage = '';
      for (let index in request){
          let item = request[index];
          const itemId = randomInt(10000000,100000000);
          dataToStorage += '(\'' + itemId + '\', \'1\'), ';
          dataToInsert +='(\'' + itemId + '\', ';
          for (let key in item){
               dataToInsert += '\'' + item[key] + '\', ';
          }
          dataToInsert = dataToInsert.slice(0, dataToInsert.length - 2);
          dataToInsert+='), ';
      }
      dataToInsert = dataToInsert.slice(0, dataToInsert.length - 2);
      dataToStorage = dataToStorage.slice(0, dataToStorage.length - 2);

      const resp = db.insert(queryFurnitureStorage.InsertIntoStorage(dataToStorage));
      const res = db.insert(queryFurniture.InsertIntoFurniture(dataToInsert));
      response.status(201).json(res);
  }

  const updateData = (request, response) => {
      let buffer = [];
      for (let index in request){
          let item = request[index];
          for (let key in item){
              buffer.push(item[key]);
          }
      }
      let idBuffer = []; let countBuffer = [];

      for (let i = 0; i < buffer.length; i++) {
          if (i % 2 == 0) {
              idBuffer.push(buffer[i]);
          }
          else {
              countBuffer.push(buffer[i])
          }
      }
      let updateStorageData = "";
      for (let i = 0; i < idBuffer.length; i++) {
          updateStorageData = db.select(queryFurnitureStorage.updateStorageCount(idBuffer[i], countBuffer[i]))
      }

      response.status(200).json("Update success")
  }



module.exports = {
      findAll, insertData, updateData
}
