import { Router } from "express";
import taskControler from "../controllers/taskControler.js";


const router = new Router();

router.post('/TaskTable', taskControler.create);
router.get('/TaskTable', taskControler.getAll);
router.delete('/TaskTable/:id',taskControler.delete);
router.get('/TaskTable/:id',taskControler.getOne);
router.put('/TaskTable',  taskControler.update);



export default router;