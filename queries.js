const database = require("./database-connection")

module.exports = {
  
    list(tableName) {
        return database(tableName).select()
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id).first()
    },
    post(tableName, newPost) {
      return database(tableName)
        .insert(newPost)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newUpdate) {
      return database(tableName)
        .update(newUpdate)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}