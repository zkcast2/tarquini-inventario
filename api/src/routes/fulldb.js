const { Computer, Other, Phone, Sector } = require("../db");

const { Router } = require("express");
const router = Router();
const { showroom } = require("../data/data")
const { computer, phone } = require("../dbGenerator/dataModels")
const { getRandomObj } = require("../dbGenerator/dbGenerator")

// const sectores = ['SHOWROOM', 'ADMINISTRACION', 'DROMONT', 'LABORATORIO', 'CAJA', 'LOGISTICA', 'MARKETING', 'PRODUCCION', 'VENTA EXT', 'SILVINA', 'CEMENTICIO', 'MANTENIMIENTO', 'OFICINA CARLOS', 'DEPOSITO CEMENTICIO', 'DROMONT', 'CALE STA MARTA', 'CALLE GUTIERREZ', 'DEPOSITO ACRILICO', 'PTA GRANDE ACRILICO', 'PTA CHICA ACRILICO', 'MARMOLINA', 'TALLER PUERTA ALTA']

const sectores = ['SHOWROOM', 'ADMINISTRACION', 'CAJA', 'PLANTA BAJA', 'PLANTA ALTA', 'VENTAS', 'TECNOLOGIA', 'DIRECCION', 'PRODUCCION', 'INVESTIGACION']


const getdB = (string) => {
    if (string == 'SHOWROOM') { return showroom }
}

router.post("/", async (req, res) => {

    try {


        sectores.sort().forEach(async (sector) => {

            let finder = await Sector.findOne({ where: { nombre: sector } })

            if (!finder) {
                
                let newSector = await Sector.create({ nombre: sector })

                let item_quantity = Math.floor(Math.random() * (6 - 15) + 15)

                let items = [...Array(item_quantity).keys()].map(() => getRandomObj())

                items.forEach(async element => {

                    if (element.inventario === 'PC/Notebook') {
                        let newC = await Computer.create(element)
                        await newC.setSector(newSector.id)

                    } else if (element.inventario === 'Telefono') {
                        let newP = await Phone.create(element)
                        await newP.setSector(newSector.id)

                    } else if (element.inventario === 'Otro') {
                        let newO = await Other.create(element)
                        await newO.setSector(newSector.id)
                    }
                })
            }
        }

        )

        res.status(200).json({ msg: 'base de datos creada' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }


})

module.exports = router;