const {computer, phone, other } = require("./dataModels")

const getBoolean = () => {
    return [true, false][Math.floor(Math.random() * 2)]
}

const getRandomArbitrary = (min, max) => {
    max++
    return Math.floor(Math.random() * (min - max) + max);
}
 
const handleOptions = (value) => {
    if (value.includes('boolean')) { return getBoolean() }
    if (value.includes('&')) {return (getRandomArbitrary(Number(value[0]), Number(value[2]))).toString() }
    // if (Array.isArray(value) && Array.isArray(value[0])) {return 'grupo de cosas'}
    if (Array.isArray(value) && !value.includes('&')) { return value[Math.floor(Math.random() * value.length)] }

    return value
}


const items = [computer, phone, other]

const getRandomObj = () => {

    randomItem = items[Math.floor(Math.random() * items.length)]

    let quantity = Object.keys(randomItem).length

    let randomObj = {}
    for (let i = 0; i < quantity; i++) {
        randomObj = {
            ...randomObj,
            [(Object.keys(randomItem)[i])] : handleOptions((Object.values(randomItem)[i]))
        }
    }

    return randomObj
}

module.exports = {getRandomObj}