const { conn } = require("./src/db.js");
const server = require("./src/app.js");
const axios = require('axios')

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Taquini's inventario // listening at ${process.env.PORT}`);
    axios.post(`${process.env.URLBASE}:${process.env.PORT}/fulldb`);
  });
});
