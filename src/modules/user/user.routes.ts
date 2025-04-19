import { Router } from "express";
import { userController } from "./user.controller";
import { authGuard } from "../../middleware/authGuard";
import { ROLE } from "../../constant";

const router = Router();

router.patch("/:id", userController.updateDoc);

router.patch(
	"/update-role/:id",
	authGuard(ROLE.admin), // only admin can update user's role
	userController.updateRole
);
router.get("/instructors", userController.getInstructors);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllFromDB);

export const userRoutes = router;
