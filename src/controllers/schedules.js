const schedulesService = require("../services/schedules");

module.exports = (app) => {
  app.get("/schedules", async (req, res, next) => {
    return schedulesService.getAllSchedules(res);
  });

  app.get("/schedules/:id", async (req, res, next) => {
    return schedulesService.getSchedulesById(req, res);
  });
};

