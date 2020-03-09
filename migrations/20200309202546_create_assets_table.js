exports.up = function(knex, Promise) {
  return knex.schema.createTable('assets', function(t) {
    t.increments('id').unsigned().primary();
    t.text('asset_name').notNull();
    t.integer('center_id').unsigned().notNull();
    t.decimal('asset_length').nullable();
    t.decimal('asset_breadth').nullable();
    t.decimal('asset_width').nullable();
    t.text('location_details').nullable();
    t.boolean('status').notNull().defaultTo(true);
    t.timestamp('created_at').defaultTo(knex.fn.now());
    });

    t.foreign('center_id').references('id').inTable('shopping_center');
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assets');
};
