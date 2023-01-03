const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Phone', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        inventario: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Telefono'
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

        marca: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sin marca'
        },

        nromodelo: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        micro: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        memoriainterna: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ram: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        imei: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        serie: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        codigodebarras: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'Sin codigo'
        },

        cfgcorreoempresa: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        wpbusiness: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        nrofactura: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        fechafactura: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        proveedor: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        entregaplanilla: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        versionandroid: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        microsd: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        fuente: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        nro: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        usuarioclaro: {
            type: DataTypes.STRING,
            allowNull: true,
        },


        accesorios: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        cfggmail: {
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

//Chrome, drive, gmail, calendar bussiness