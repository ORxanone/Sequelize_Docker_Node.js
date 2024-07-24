const userController = require("../controllers/userController");
// const processController = require("../controllers/authController");

const router = (app) => {
  app.use("/login", userController);
  app.use("/process", processController);

  app.all("*", (req, res, next) => {
    const err = new Error("Not found");
    err.status = "fail";
    err.statusCode = 404;
    throw err;
    next();
  });

  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });
};
