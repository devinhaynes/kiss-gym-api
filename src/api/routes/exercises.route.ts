import express from "express";
import {
  createExercise,
  getExercises,
  getExerciseById,
  updateExercise,
  deleteExercise,
} from "../controllers/exercises.controller";

const router = express.Router();

// Create a new exercise
router.post("/", createExercise);
// Get all exercises
router.get("/", getExercises);
// Get a single exercise by ID
// @ts-ignore
router.get("/:id", getExerciseById);
// Update an exercise by ID
// @ts-ignore
router.put("/:id", updateExercise);
// Delete an exercise by ID
// @ts-ignore
router.delete("/:id", deleteExercise);
// Export the router
export default router;
