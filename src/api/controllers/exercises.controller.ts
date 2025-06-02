import { Request, Response } from "express";
import * as exerciseService from "../services/exercises.service";

// Create a new exercise
export const createExercise = async (req: Request, res: Response) => {
  try {
    const exercise = await exerciseService.createExercise(req.body);
    res.status(201).json(exercise);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get all exercises
export const getExercises = async (_req: Request, res: Response) => {
  try {
    const exercises = await exerciseService.getExercises();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a single exercise by ID
export const getExerciseById = async (req: Request, res: Response) => {
  try {
    const exercise = await exerciseService.getExerciseById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Update an exercise by ID
export const updateExercise = async (req: Request, res: Response) => {
  try {
    const updated = await exerciseService.updateExercise(
      req.params.id,
      req.body
    );
    if (!updated) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete an exercise by ID
export const deleteExercise = async (req: Request, res: Response) => {
  try {
    const deleted = await exerciseService.deleteExercise(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
