exports.seed = function(knex, Promise) {
  return knex('assets').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('assets').insert({
        asset_name: 'Asset one',
        center_id: 2,
        asset_length: 34,
        asset_breadth: 34,
        asset_width: 12,
        location_details: 'lorem ipsum',
        status: true,
      });
    }).then(function () {
      return knex('assets').insert({
        asset_name: 'Asset two',
        center_id: 2,
        asset_length: 34,
        asset_breadth: 34,
        asset_width: 12,
        location_details: 'lorem ipsum',
        status: true,
      });
    }).then(function () {
      return knex('assets').insert({
        asset_name: 'Asset three',
        center_id: 3,
        asset_length: 34,
        asset_breadth: 34,
        asset_width: 12,
        location_details: 'lorem ipsum',
        status: false,
      });
    }).then(function () {
      return knex('assets').insert({
        asset_name: 'Asset four',
        center_id: 3,
        asset_length: 34,
        asset_breadth: 34,
        asset_width: 12,
        location_details: 'lorem ipsum',
        status: true,
      });
    });
};
