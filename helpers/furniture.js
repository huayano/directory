const DB = require('../classes/Db');
const Query = require('../classes/Querry');

const config = require('../config');
const db = new DB(config.db);

const query_frntr = new Query(config.tables.furniture);
const query_frntr_type = new Query(config.tables.furniture_type);

  const findAll = async (request, response) => {
      const res = await db.select(query_frntr.SelectAllFurniture());
      console.log(res);
      response.status(200).json(res);
  }

  const insertOne = async (request, response) => {
      /*let res = '';
      const body = [];
      request.on("data", (chunk) => {
          body.push(chunk);
      });
      await request.on("end", async () => {
          const parsedBody = Buffer.concat(body).toString();
          res = await db.insert(query.InsertTree(JSON.parse(parsedBody)));
          response.status(200).json({command:res.command, rowCount:res.rowCount});
      });*/
      let data = '\'2\',\'50\',\'50\',\'50\',\'Дерево\',\'Белый\',\'1\',\'Стол\',\'18\',\'3600\'';
      const res = await db.insert(query_frntr.InsertIntoFurniture(data));
      console.log(res);
      response.status(201).json(res);
  }



module.exports = {
      findAll, insertOne
}