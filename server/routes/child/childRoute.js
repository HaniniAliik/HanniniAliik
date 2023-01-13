const router = require('express').Router();
const childGamesController = require("../../controller/child/childGamesController");
const childTodoController = require("../../controller/child/childTodoController");

router.get("/allGames",childGamesController.selectAll);
router.post("/add",childGamesController.add);

router.get("/all",childTodoController.selectAll);
router.put("/update/:id",childTodoController.update)

module.exports = router;
