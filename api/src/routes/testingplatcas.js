const {handleCoins} = require("../test/handleCoins")

const { Router } = require("express");
const router = Router();


router.get('/', async (req, res) => {
    
    let name = 'Uguilleee95'
    let quantity = '1'

    try {
        let result = await handleCoins(name, quantity)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;