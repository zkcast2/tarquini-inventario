const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Other', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        inventario: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Otro'
        },

        puesto: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ubicacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        usuario: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sin usuario'
        },


        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Other'
        },

        codigodebarras: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'Sin codigo'

        },

        articulo: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        marca: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sin marca'
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        nrofactura: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        nroserie: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        entregaplanilla: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ''
        }
    }

    )
}