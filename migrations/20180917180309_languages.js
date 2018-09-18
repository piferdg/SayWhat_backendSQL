
exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages', function (table) {
    table.increments()
    table.text('languageName')
    table.text('languageCode')    
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('languages')
};
