'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblTipoPeticion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tblTipoPeticion.hasMany(models.tblPeticion,{
      //   foreignKey:'petTipoPetId'
      // })

      tblTipoPeticion.associate=(models)=>{
        tblTipoPeticion.hasMany(models.tblPeticion,{
          foreignKey:'tipPetId',
          as:'tblPeticion'
        })
      }


      // tblTipoPeticion.belongsTo(models.tblPeticion,{
      //   foreignKey:'petId',
      //   target_key:'petUsuId'
      // })
      // tblTipoPeticion.associate=(models)=>{
      //   tblTipoPeticion.belongsTo(models.tblPeticion,{
      //     foreignKey:'tipPetId',
      //     as:'tblPeticion'
      //   })
      // }

    }
  }
  tblTipoPeticion.init({
    petId: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true
    },
    tipPetNom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblTipoPeticion',
  });
  return tblTipoPeticion;
};