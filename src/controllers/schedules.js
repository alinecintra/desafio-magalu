const schedulesService = require("../services/schedules");

module.exports = (app) => {
  app.get("/schedules", async (req, res, next) => {
    return schedulesService.getAllSchedules(res);
  });

  app.get("/schedules/:id", async (req, res, next) => {
    return schedulesService.getSchedulesById(req, res);
  });

  app.post("/schedules", async (req, res, next) => {
    return schedulesService.postSchedules(req, res);
  });

  app.delete("/schedules/:id", async (req, res, next) => {
    return schedulesService.deleteSchedules(req, res)
  });
};

