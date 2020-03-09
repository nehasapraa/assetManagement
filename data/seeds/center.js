exports.seed = function(knex, Promise) {
  return knex('shopping_center').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('shopping_center').insert({
        center_name: 'Westfield Bondi',
        address: 'Bondi Station',
      });
    }).then(function () {
      return knex('shopping_center').insert({
        center_name: 'Westfield Miranda',
        address: 'Miranda Station',
      });
    }).then(function () {
      return knex('shopping_center').insert({
        center_name: 'Westfield Castle hill',
        address: 'Castle hill',
      });
    }).then(function () {
      return knex('shopping_center').insert({
        center_name: 'Westfield Rouse hill',
        address: 'Rouse hill',
      });
    }).then(function () {
      return knex('shopping_center').insert({
        center_name: 'Westfield ABC',
        address: 'ABC',
      });
    });
};
