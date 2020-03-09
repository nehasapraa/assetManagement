exports.seed = function(knex, Promise) {
return knex('shopping_center').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('assets').del()
    }).then(function () {
      return knex('shopping_center').insert({
        center_name: 'Westfield Miranda',
        address: 'Miranda Station',
      })
      .returning('id')
    }).then(function (response) {
      return knex('assets').insert({
        asset_name: 'Asset one',
        center_id: response[0],
        asset_length: 34,
        asset_breadth: 34,
        asset_width: 12,
        location_details: 'lorem ipsum',
        status: true,
      })
      .returning('center_id')
    }).then(function (response) {
        return knex('assets').insert({
          asset_name: 'Asset two',
          center_id: response[0],
          asset_length: 34,
          asset_breadth: 34,
          asset_width: 12,
          location_details: 'lorem ipsum',
          status: true,
        })
        .returning('center_id')
    }).then(function (response) {
         return knex('assets').insert({
           asset_name: 'Asset Three',
           center_id: response[0],
           asset_length: 34,
           asset_breadth: 34,
           asset_width: 12,
           location_details: 'lorem ipsum',
           status: false,
         });
    }).then(function () {
      return knex('shopping_center').insert({
        center_name: 'Westfield Rouse hill',
        address: 'Rouse hill',
      })
      .returning('id')
    }).then(function (response) {
      return knex('assets').insert({
        asset_name: 'Asset four',
        center_id: response[0],
        asset_length: 34,
        asset_breadth: 34,
        asset_width: 12,
        location_details: 'lorem ipsum',
        status: true,
      })
      .returning('center_id')
    }).then(function (response) {
        return knex('assets').insert({
          asset_name: 'Asset five',
          center_id: response[0],
          asset_length: 34,
          asset_breadth: 34,
          asset_width: 12,
          location_details: 'lorem ipsum',
          status: true,
        })
        .returning('center_id')
    });
}
