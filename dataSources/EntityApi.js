const {
  caseHelpers: { toCamel, toSnake},
  dateHelpers: { nowTimestampUtcString },
  uuidHelpers: { generateId },
} = require('../helpers');


class EntityApi {
  constructor(entityName, db) {
    this.db = db;
    this.entityName = entityName;
  }

  async byId({ id }) {
    const query = this.db(this.entityName);
    const result = await query.where({ id }).select().first();
    return this._getResults(result);
  }

  async all() {
    const query = this.db(this.entityName);
    const result = await query.select();
    return this._getResults(result);
  }

  async create({ entity }) {
    const id = generateId();

    const _entity = {
      ...entity,
      id
    }
    const snakeEntity = toSnake(_entity);
    const query = this.db(this.entityName);

    try {
      await query.insert(snakeEntity);
      return this.byId({ id });
    } catch (error) {
      console.error(`Encountered an error while creating ${this.entityName}: `, error);
      throw new Error(error); // TODO: make specific errors for this
    }
  }

  async update({ entity }) {
    const { id } = entity
    if (!id) {
      throw new Error(`ID is required when updating entity ${this.entityName}`);
    }

    const now = nowTimestampUtcString();

    const _entity = {
      ...entity,
      updatedAt: now
    };
    const snakeEntity = toSnake(_entity);
    const query = this.db(this.entityName);

    try {
      await query.where('id', id).update(snakeEntity);
      return this.byId({ id });
    } catch (error) {
      console.error(`Encountered an error while updating ${this.entityName} with ID ${id}`, error);
      throw new Error(error); // TODO: make specific errors for this
    }
  }

  async delete({ id }) {
    if (!id) {
      throw new Error(`ID is required when deleting entity ${this.entityName}`);
    }

    const query = this.db(this.entityName);
    try {
      const result = await query.where('id', id).del();
      if (!result) {
        throw new Error(`Entity with ID ${id} could not be deleted because it does not exist.`)
      }
      return result;
    } catch (error) {
      console.error(`Encountered an error while deleting ${this.entityName} with ID ${id}`, error);
      throw new Error(error); // TODO: make specific errors for this
    }
  }

  _convertToCamel(obj) {
    return toCamel(obj);
  }

  _getResults(result) {
    if (result) {
      if (Array.isArray(result)) {
        return { data: result.map(this._convertToCamel) };
      } else {
        return this._convertToCamel(result);
      }
    }
  }
}

module.exports = { EntityApi };