
exports.up = function(knex, Promise) {
  return knex.schema.createTable('countries', function (table) {
    table.increments()
    table.text('countryName')
    table.text('currency')
    table.text('primary_language')
    table.text('siteOne')
    table.text('siteTwo')
    table.text('siteThree')
    table.text('wiki_url')    
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('countries')
};

