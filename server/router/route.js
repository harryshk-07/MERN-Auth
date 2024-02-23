import { Router } from "express";
import * as controller from "../controllers/appController.js"
import Auth, {localVariables} from '../middleware/auth.js'

const router = Router()

// POST METHOD
router.route("/register").post(controller.register)
// router.route("/registerMail").post()
router.route("/authenticate").post((req,res)=> res.end())
router.route("/login").post(controller.verifyUser, controller.login)

// GET METHOD

router.route("/user/:username").get(controller.getUser)
router.route("/generateOTP").get(controller.verifyUser,localVariables, controller.generateOTP)
router.route("/verifyOTP").get(controller.verifyOTP)
router.route("/createResetSession").get(controller.createResetSession)

// PUT METHOD

router.route("/updateuser").put(Auth, controller.updateUser)
router.route("/resetPassword").put(controller.resetPassword)

export default router