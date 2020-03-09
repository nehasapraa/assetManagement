exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_center', (t) => {
    t.increments('id').unsigned().primary();
    t.text('center_name').notNull();
    t.text('address').nullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shopping_center');
};
