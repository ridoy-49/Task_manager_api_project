import express from 'express';
const router = express.Router();
import * as TaskManager from '../app/controllers/TaskControllers.js';
import * as UserManager from '../app/controllers/UserControllers.js';
import Authentication from "../app/middleware/Authentication.js";

//users
router.post("/Registration",UserManager.Registration)
router.post("/login",UserManager.login)
router.get("/PrfileDetails",Authentication,UserManager.PrfileDetails)
router.post("/ProfileUpdate",UserManager.ProfileUpdate)
router.post("/EmailVarify",UserManager.EmailVarify)
router.post("/CodeVarify",UserManager.CodeVarify)
router.post("/ResetPassword",UserManager.ResetPassword)

//task
router.post("/CreateTask",TaskManager.CreateTask)
router.get("/UpdateTaskStatus",TaskManager.UpdateTaskStatus)
router.get("/TaskListByStatus",TaskManager.TaskListByStatus)
router.get("/DeleteTask",TaskManager.DeleteTask)
router.get("/CountTask",TaskManager.CountTask)
export default router;