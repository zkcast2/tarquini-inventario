const { conn } = require("./src/db.js");
const server = require("./src/app.js");

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Taquini's inventario // listening at ${process.env.PORT}`);
  });
});
