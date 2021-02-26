
exports.up = function(knex) {
  // noinspection DuplicatedCode
    return knex.schema
      .createTable('mysteries', function(table) {
          table.uuid('id').primary();
          table.string('name').notNullable();
          table.string('concept');
          table.string('hook');
          table.string('overview');
          table.string('notes');
          table.string('custom_moves');
      })
        .createTable('countdowns', function(table) {
            table.uuid('id').primary();
            table.uuid('mystery_id').notNullable();
            table.string('day').notNullable();
            table.string('shadows').notNullable();
            table.string('sunset').notNullable();
            table.string('dusk').notNullable();
            table.string('nightfall').notNullable();
            table.string('midnight').notNullable();
            table.foreign('mystery_id').references('mysteries.id');
        })
        .createTable('monster_types', function(table) {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('motivation').notNullable();
        })
        .createTable('minion_types', function(table) {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('motivation').notNullable();
        })
        .createTable('monsters', function(table) {
            table.uuid('id').primary();
            table.uuid('mystery_id').notNullable();
            table.uuid('monster_type_id').notNullable();
            table.uuid('minion_type_id');
            table.string('name').notNullable();
            table.string('description');
            table.integer('harm_capacity').defaultTo(7);
            table.foreign('mystery_id').references('mysteries.id');
            table.foreign('monster_type_id').references('monster_types.id');
            table.foreign('minion_type_id').references('minion_types.id');
        })
        .createTable('monster_powers', function(table) {
            table.uuid('id').primary();
            table.uuid('monster_id').notNullable();
            table.string('name').notNullable();
            table.string('description');
            table.foreign('monster_id').references('monsters.id');
        })
        .createTable('monster_attacks', function(table) {
            table.uuid('id').primary();
            table.uuid('monster_id').notNullable();
            table.string('name').notNullable();
            table.string('description');
            table.foreign('monster_id').references('monsters.id');
        })
        .createTable('monster_armors', function(table) {
            table.uuid('id').primary();
            table.uuid('monster_id').notNullable();
            table.string('name').notNullable();
            table.string('description');
            table.boolean('is_magical').defaultTo(false);
            table.foreign('monster_id').references('monsters.id');
        })
        .createTable('monster_weaknesses', function(table) {
            table.uuid('id').primary();
            table.uuid('monster_id').notNullable();
            table.string('name').notNullable();
            table.string('description');
            table.foreign('monster_id').references('monsters.id');
        })
        .createTable('location_types', function(table) {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('motivation').notNullable();
        })
        .createTable('locations', function(table) {
            table.uuid('id').primary();
            table.uuid('mystery_id').notNullable();
            table.uuid('location_type_id').notNullable();
            table.string('name').notNullable();
            table.string('description');
            table.foreign('mystery_id').references('mysteries.id');
            table.foreign('location_type_id').references('location_types.id');
        })
        .createTable('bystander_types', function(table) {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('motivation').notNullable();
        })
        .createTable('bystanders', function(table) {
            table.uuid('id').primary();
            table.uuid('mystery_id').notNullable();
            table.uuid('bystander_type_id').notNullable();
            table.string('name').notNullable();
            table.string('description');
            table.foreign('mystery_id').references('mysteries.id');
            table.foreign('bystander_type_id').references('location_types.id');
        });
};

exports.down = function(knex) {
  
};
