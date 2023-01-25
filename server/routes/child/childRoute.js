const router = require('express').Router();
const childGamesController = require("../../controller/child/childGamesController");
const childTodoController = require("../../controller/child/childTodoController");

router.get("/allGamesP",childGamesController.selectAllP);
router.get("/allGamesC",childGamesController.selectAllC);
router.post("/add",childGamesController.add);

router.get("/all",childTodoController.selectAll);
router.put("/update/:id",childTodoController.update)

module.exports = router;