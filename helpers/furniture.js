const DB = require('../classes/Db');
const Query = require('../classes/Querry');
const { randomInt } = require('../helpers/utils');

const config = require('../config');
const db = new DB(config.db);

const query_frntr = new Query(config.tables.furniture);
const query_frntr_type = new Query(config.tables.furniture_type);

  const findAll = async (request, response) => {
      const res = await db.select(query_frntr.SelectAllFurniture());
      response.status(200).json(res);
  }

  const insertData = (request, response) => {
      let dataToInsert = '';
      for (let index in request){
          let item = request[index];
          dataToInsert+='(\'' + randomInt(10000000,100000000) + '\', ';
          for (let key in item){
               dataToInsert += '\'' + item[key] + '\', ';
          }
          dataToInsert = dataToInsert.slice(0, dataToInsert.length - 2);
          dataToInsert+='), ';
      }
      dataToInsert = dataToInsert.slice(0, dataToInsert.length - 2);

      const res = db.insert(query_frntr.InsertIntoFurniture(dataToInsert));
      response.status(201).json(res);
  }



module.exports = {
      findAll, insertData
}
