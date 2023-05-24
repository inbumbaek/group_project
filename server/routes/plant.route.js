const plantController = require("../controllers/plant.controller");
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
  app.post("/api/plant", plantController.createNew);
  app.get("/api/plant", plantController.getAll);
  app.get("/api/plant/:id", plantController.getOne);
  app.put("/api/plant/:id", plantController.update);
  app.delete("/api/plant/:id", plantController.destroy);
};
