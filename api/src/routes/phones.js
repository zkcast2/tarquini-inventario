const { Computer, Other, Phone, Puesto, Sector } = require("../db");

const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
    try {
        let allPhones = await Phone.findAll()
        res.status(200).json(allPhones)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get("/:id", async (req, res) => {

    const {id} = req.params

    try {
        const finder = await Phone.findByPk(id) 
        res.status(200).json(finder)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post("/:sectorId", async (req, res) => {

    const { sectorId } = req.params

    const { 
        puesto,
        ubicacion,
        usuario,
        marca,
        nromodelo,
        micro,
        memoriainterna,
        ram,
        imei,
        serie,
        codigodebarras,
        cfgcorreoempresa,
        wpbusiness,
        nrofactura,
        fechafactura,
        proveedor,
        entregaplanilla,
        versionandroid,
        microsd,
        fuente,
        nro,
        usuarioclaro,
        accesorios,
        cfggmail } = req.body

    try {

        let newPhone = await Phone.create(req.body)

        await newPhone.setSector(sectorId)

        return res.status(200).json({ newPhone, msg: `Telefono creado.` })

    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }

})


router.put("/editphone/:id", async (req,res) => {
    const phoneId = req.params.id
    try {
        const finder = await Phone.findByPk(phoneId)
        await finder.update(req.body)
        return res.status(200).json({msg: `${phoneId} updated successfully.`})
    } catch (error) {
        return res.status(400).json({msg: error})
    }
})


router.delete("/", async (req, res) => {

    const { phoneId } = req.body

    try {
        let finder = await Phone.findByPk(phoneId)
        await finder.destroy()
        return res.status(200).json({msg: `${phoneId} destruido.`})
    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }
})


module.exports = router;

// marca, nro modelo, micro, memoria interna, ram, imei, serie

