
exports.up = function(knex, Promise) {
  return knex.schema.createTable('countries', function (table) {
    table.increments()
    table.text('countryName')
    table.text('currency')
    table.text('attractionOne')
    table.text('attractionTwo')
    table.text('attractionThree')    
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('countries')
};

