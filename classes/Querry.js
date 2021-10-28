class Query {
    constructor(table) {
        this.table = table;
    }

    SelectAllFurniture(id) {
        return `Select * from ${this.table}`;
    }
    InsertIntoFurniture(data) {
        return `Insert into ${this.table} values ${data}`
    }

}
module.exports = Query;
