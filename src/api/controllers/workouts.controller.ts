import * as workoutsService from "../services/workouts.service";
import { Request, Response } from "express";

// Create a new workout
export const createWorkout = async (req: Request, res: Response) => {
  try {
    const workout = await workoutsService.createWorkout(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
// Get all workouts
export const getWorkouts = async (_req: Request, res: Response) => {
  try {
    const workouts = await workoutsService.getWorkouts();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
// Get a single workout by ID
export const getWorkoutById = async (req: Request, res: Response) => {
  try {
    const workout = await workoutsService.getWorkoutById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
// Update a workout by ID
export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const updated = await workoutsService.updateWorkout(
      req.params.id,
      req.body
    );
    if (!updated) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
// Delete a workout by ID
export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const deleted = await workoutsService.deleteWorkout(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
