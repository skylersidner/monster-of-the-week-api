exports.up = function (knex) {
  // noinspection DuplicatedCode
  return knex.schema
  .createTable('mysteries', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('concept');
    table.string('hook');
    table.string('overview');
    table.string('notes');
    table.timestamps(true, true);
  })
  .createTable('countdowns', function (table) {
    table.uuid('id').primary();
    table.uuid('mystery_id').notNullable();
    table.string('day').notNullable();
    table.string('shadows').notNullable();
    table.string('sunset').notNullable();
    table.string('dusk').notNullable();
    table.string('nightfall').notNullable();
    table.string('midnight').notNullable();
    table.foreign('mystery_id').references('mysteries.id');
    table.timestamps(true, true);
  })
  .createTable('monster_types', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('motivation').notNullable();
    table.timestamps(true, true);
  })
  .createTable('minion_types', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('motivation').notNullable();
    table.timestamps(true, true);
  })
  .createTable('monsters', function (table) {
    table.uuid('id').primary();
    table.uuid('mystery_id').notNullable();
    table.uuid('monster_type_id');
    table.uuid('minion_type_id');
    table.string('name').notNullable();
    table.string('description');
    table.integer('harm_capacity').defaultTo(7);
    table.foreign('mystery_id').references('mysteries.id');
    table.foreign('monster_type_id').references('monster_types.id');
    table.foreign('minion_type_id').references('minion_types.id');
    table.timestamps(true, true);
  })
  .createTable('monster_powers', function (table) {
    table.uuid('id').primary();
    table.uuid('monster_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('monster_id').references('monsters.id');
    table.timestamps(true, true);
  })
  .createTable('weapon_tags', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.timestamps(true, true);
  })
  .createTable('monster_attacks', function (table) {
    table.uuid('id').primary();
    table.uuid('monster_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.integer('harm');
    table.foreign('monster_id').references('monsters.id');
    table.timestamps(true, true);
  })
  .createTable('weapon_tags_monster_attacks', function (table) {
    table.uuid('weapon_tag_id').notNullable();
    table.uuid('monster_attack_id').notNullable();
    table.foreign('weapon_tag_id').references('weapon_tags.id');
    table.foreign('monster_attack_id').references('monster_attacks.id');
    table.primary(['weapon_tag_id', 'monster_attack_id']);
    table.timestamps(true, true);
  })
  .createTable('monster_armors', function (table) {
    table.uuid('id').primary();
    table.uuid('monster_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.boolean('is_magical').defaultTo(false);
    table.foreign('monster_id').references('monsters.id');
    table.timestamps(true, true);
  })
  .createTable('monster_weaknesses', function (table) {
    table.uuid('id').primary();
    table.uuid('monster_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('monster_id').references('monsters.id');
    table.timestamps(true, true);
  })
  .createTable('location_types', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('motivation').notNullable();
    table.timestamps(true, true);
  })
  .createTable('locations', function (table) {
    table.uuid('id').primary();
    table.uuid('mystery_id').notNullable();
    table.uuid('location_type_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('mystery_id').references('mysteries.id');
    table.foreign('location_type_id').references('location_types.id');
    table.timestamps(true, true);
  })
  .createTable('bystander_types', function (table) {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('motivation').notNullable();
    table.timestamps(true, true);
  })
  .createTable('bystanders', function (table) {
    table.uuid('id').primary();
    table.uuid('mystery_id').notNullable();
    table.uuid('bystander_type_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('mystery_id').references('mysteries.id');
    table.foreign('bystander_type_id').references('bystander_types.id');
    table.timestamps(true, true);
  })
  .createTable('mystery_custom_moves', function (table) {
    table.uuid('id').primary();
    table.uuid('mystery_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('mystery_id').references('mysteries.id');
    table.timestamps(true, true);
  })
  .createTable('monster_custom_moves', function (table) {
    table.uuid('id').primary();
    table.uuid('monster_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('monster_id').references('monsters.id');
    table.timestamps(true, true);
  })
  .createTable('location_custom_moves', function (table) {
    table.uuid('id').primary();
    table.uuid('location_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('location_id').references('locations.id');
    table.timestamps(true, true);
  })
  .createTable('bystander_custom_moves', function (table) {
    table.uuid('id').primary();
    table.uuid('bystander_id').notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.foreign('bystander_id').references('bystanders.id');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {

};
