const router = require('express').Router();
const childGamesController = require("../controllers/childGamesController");
const childTodoController = require("../controllers/childTodoController");

router.get("/allGames",childGamesController.selectAll);
router.post("/add",childGamesController.add);

router.get("/all",childTodoController.selectAll);
router.put("/update/:id",childTodoController.update)

module.exports = router;
