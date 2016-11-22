'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    name: DataTypes.STRING,
    resource_type: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    website_url: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    create_by: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Resource;
};