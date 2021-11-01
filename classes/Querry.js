class Query {
    constructor(table) {
        this.table = table;
    }

    SelectAllFurniture() {
        return `Select * from ${this.table}`;
    }
    InsertIntoFurniture(data) {
        return `Insert into ${this.table} values ${data}`
    }
    InsertIntoStorage(data) {
        return `Insert into ${this.table} values ${data}`
    }
    updateStorageCount(id, newCount) {
        return `Update furniture_storage set count = ${newCount} where id = ${id}`;
    }

}
module.exports = Query;
