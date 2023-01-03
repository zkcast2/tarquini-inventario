const { Computer, Other, Phone, Puesto, Sector } = require("../db");

const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    try {
        let allOthers = await Other.findAll()
        res.status(200).json(allOthers)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get("/:id", async (req, res) => {

    const {id} = req.params

    try {
        const finder = await Other.findByPk(id) 
        res.status(200).json(finder)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post("/:sectorId", async (req, res) => {

    const { sectorId } = req.params

    const {
        nombre,
        puesto,
        ubicacion,
        usuario,
        codigodebarras,
        articulo,
        marca,
        modelo,
        nrofactura,
        nroserie,
        entregaplanilla,
    } = req.body

    console.log(nombre)
    if (!nombre) { return res.status(400).json({ msg: "Indica un nombre." }) }

    try {

        let newOther = await Other.create(req.body)

        console.log(newOther)
        await newOther.setSector(sectorId)

        return res.status(200).json({ newOther, msg: `${nombre} creado.` })

    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }

})


router.put("/editother/:id", async (req,res) => {
    const otherId = req.params.id
    try {
        const finder = await Other.findByPk(otherId)
        await finder.update(req.body)
        return res.status(200).json({msg: `${otherId} updated successfully.`})
    } catch (error) {
        return res.status(400).json({msg: error})
    }
})


router.delete("/", async (req, res) => {

    const { otherId } = req.body

    try {
        let finder = await Other.findByPk(otherId)
        await finder.destroy()
        return res.status(200).json({msg: `${otherId} destruido.`})
    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }
})

module.exports = router;


