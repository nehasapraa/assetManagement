const { Model } = require('objection');
const db = require("../../data/db.js");
//
//Model.knex(db)

class Center extends Model {
  static get tableName() {
    return 'shopping_center';
  }

  static get relationMappings() {
      const Asset = require('./Asset');
      return {
          assets: {
              relation: Model.HasManyRelation,
              modelClass: Asset,
              join: {
                  from: 'shopping_center.id',
                  to:  'assets.center_id'
              }
          }
      }
  }
}
//class Center extends Model {
//  static tableName = 'shopping_center';
//
//  static relationMappings = {
//    assets: {
//      relation: Model.HasManyRelation,
//      modelClass: __dirname + '/Asset',
//      join: {
//        from: 'shopping_center.id',
//        to: 'assets.center_id'
//      }
//    }
//  };
//}
module.exports = Center;
//var Model = require('objection').Model;
//Model.knex(db)
//// Extends Model constructor.
//function Center() {
//  Model.apply(this, arguments);
//}
//
//Center.extend(Center);
//module.exports = Center;
//// Table name is the only required property;
//Asset.tableName = 'assets';
//
//// This object defines the relations to other models
//Center.relationMappings = {
//  assets: {
//    relation: Model.HasManyRelation,
//    // We use __dirname to avoid require loops
//    modelClass: __dirname + '/Asset',
//    join: {
//      from: 'shopping_center.id',
//      to: 'assets.center_id'
//    }
//  }
//};
