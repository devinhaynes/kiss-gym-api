import express from "express";
import {
  createWorkout,
  getWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workouts.controller";
const router = express.Router();

router.get("/", getWorkouts);

// @ts-ignore
router.get("/:id", getWorkoutById);

router.post("/", createWorkout);

// @ts-ignore
router.put("/:id", updateWorkout);

// @ts-ignore
router.delete("/:id", deleteWorkout);

export default router;
