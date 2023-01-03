const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Computer', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
                    
        inventario: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'PC/Notebook'
        },
        
        puesto: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        ubicacion: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        usuario: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sin usuario'
        },

        mother: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sin nombre'
        },

        microprocesador: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        disco: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        ram: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        serie: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        codigodebarras: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'Sin codigo'
        },

        os: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        grupolicencia: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        idproducto: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        programas: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
            defaultValue: []
        },

        impresora: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        grupotrabajo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        nombreequipo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        usuariowindows: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        usuariolinux: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        backuplocal: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        actualizacionso: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        
        accesodirectosv: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        
        cfgcorreo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        
        habilitaradministrador: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        
        actualizacionwin: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
                
        nrofacturacompra: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
               
        passwifiubuntu: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
                
        camaraweb: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
                
        licenciawinoffice: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        filestream: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
                
        cfgcarpetasadrive: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
   
        reglicplanillacontrol: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
                
        entregaplanilla: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },

        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: ''
        }
 

    }

    )
}



// google chrome, 7zip, ultranc, adobe acrobat, libre office, microsoft office, zoom, teamviewer/anydesk