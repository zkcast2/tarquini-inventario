const { Computer, Other, Phone, Sector } = require("../db");

const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    try {
        let allComputers = await Computer.findAll()
        res.status(200).json(allComputers)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get("/:id", async (req, res) => {

    const { id } = req.params

    try {
        const finder = await Computer.findByPk(id)
        res.status(200).json(finder)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post("/:sectorId", async (req, res) => {
    console.log('llega 1')

    const { sectorId } = req.params

    const {
        puesto,
        ubicacion,
        usuario,
        mother,
        microprocesador,
        disco,
        ram,
        serie,
        codigodebarras,
        os,
        grupolicencia,
        idproducto,
        programas,
        impresora,
        grupotrabajo,
        nombreequipo,
        usuariowindows,
        usuariolinux,
        backuplocal,
        actualizacionso,
        accesodirectosv,
        cfgcorreo,
        habilitaradministrador,
        actualizacionwin,
        nrofacturacompra,
        passwifiubuntu,
        antivirus,
        camaraweb,
        licenciawinoffice,
        filestream,
        cfgcarpetasadrive,
        reglicplanillacontrol,
        entregaplanilla } = req.body


    try {
        let newComputer = await Computer.create(req.body)
        await newComputer.setSector(sectorId)
        return res.status(200).json({ newComputer, msg: `PC creada.` })

    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }

})



router.put("/editcomputer/:id", async (req, res) => {
    const computerId = req.params.id
    try {
        const finder = await Computer.findByPk(computerId)
        await finder.update(req.body)
        return res.status(200).json({ msg: `${computerId} updated successfully.` })
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
})



router.delete("/", async (req, res) => {

    const { computerId } = req.body
    console.log(computerId)
    try {
        let finder = await Computer.findByPk(computerId)
        if (!finder) { return res.status(400).json({msg: 'No PC/Computer with that ID'})}
        await finder.destroy()
        return res.status(200).json({msg: `${computerId} destruido.`})
    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }
})


module.exports = router;

// caracteristicas:
// MOTHER:
// MICRO:
// HD:
// UPS:
// RAM
// SERIE: