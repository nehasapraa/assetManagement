const { Model }  = require('objection');
const db = require("../../data/db.js");
const Center = require('./Center')
//
Model.knex(db)

class Asset extends Model {
  static get tableName() {
    return 'assets';
  }

  static get relationMappings() {
      const Center = require('./Center');
      return {
          shopping_center: {
              relation: Model.BelongsToOneRelation,
              modelClass: Center,
              join: {
                  from: 'assets.center_id',
                  to: 'shopping_center.id'
              }
          }
      }
  }
}
//class Asset extends Model {
//  static tableName = 'assets';
//
//  static relationMappings = {
//    shopping_center: {
//      relation: Model.BelongsToOneRelation,
//      modelClass: Center,
//      join: {
//        from: 'assets.center_id',
//        to: 'shopping_center.id'
//      }
//    }
//  };
//}
//

module.exports = Asset;
//var Model = require('objection').Model;
//Model.knex(db);
//// Extends Model constructor.
//function Asset() {
//  Model.apply(this, arguments);
//}
//
//Model.extend(Asset);
//module.exports = Asset;
//// Table name is the only required property;
//Asset.tableName = 'assets';
//
//// This object defines the relations to other models
//Asset.relationMappings = {
//  shopping_center: {
//    relation: Model.BelongsToOneRelation,
//    // We use __dirname to avoid require loops
//    modelClass: __dirname + '/Center',
//    join: {
//      from: 'assets.center_id',
//      to: 'shopping_center.id'
//    }
//  }
//};
