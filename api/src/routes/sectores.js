const { Computer, Other, Phone, Sector } = require("../db");

const { Router } = require("express");
const router = Router();



router.get("/getall", async (req, res) => {
    try {
        let allComputers = await Computer.findAll({include: Sector})
        let allPhones = await Phone.findAll({include: Sector})
        let allOthers = await Other.findAll({include: Sector})
        result = [...allComputers, ...allPhones, ...allOthers]
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})


router.get("/:sectorId", async (req, res) => {

    const { sectorId } = req.params

    try {
        let sector = await Sector.findByPk(sectorId, { include: [Computer, Other, Phone] })
        res.status(200).json(sector)
    } catch (error) {
        res.status(400).json(error.message)
    }
})


router.get("/", async (req, res) => {
    try {
        let allSectores = await Sector.findAll()
        res.status(200).json(allSectores)
    } catch (error) {
        res.status(400).json(error.message)
    }
})





router.post("/", async (req, res) => {

    const { sectorName } = req.body

    try {

        let check = await Sector.findOne({ where: { nombre: sectorName } })

        if (check) { return res.status(400).json({ msg: "Ese nombre ya existe." }); }

        let newSector = await Sector.create({ nombre: sectorName })

        return res.status(200).json({ newSector, msg: `Sector ${sectorName} creado.` })
    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }


})

router.delete("/", async (req, res) => {

    const { sectorId } = req.body

    try {
        let finder = await Sector.findByPk(sectorId)
        await finder.destroy()
        return res.status(200).json({msg: `${sectorId} destruido.`})
    } catch (error) {
        return res.status(400).json({ msg: `Error ${error.message}` })
    }
})


module.exports = router;
