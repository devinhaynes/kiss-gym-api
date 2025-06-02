import e from "express";
import type { Exercise } from "./exercises.service";

type Workout = {
  id: string;
  name: string;
  description: string;
  duration: number;
  exercises: Exercise[]; // Array of exercise IDs
  createdAt: Date;
  updatedAt: Date;
};

export const createFakeWorkout = (
  overrides: Partial<Workout> = {}
): Workout => {
  return {
    id: "fake-id",
    name: "Fake Workout",
    description: "This is a fake workout for testing purposes.",
    duration: 60,
    exercises: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
};
const TempWorkouts: Workout[] = [
  createFakeWorkout({
    id: "workout-1",
    name: "Full Body Workout",
    description: "A comprehensive full body workout.",
    duration: 45,
    exercises: [
      { id: "squat", name: "Squat", type: "strength", targetMuscle: "legs" },
      {
        id: "burpee",
        name: "Burpee",
        type: "cardio",
        targetMuscle: "full body",
      },
      { id: "plank", name: "Plank", type: "core", targetMuscle: "core" },
    ] as Exercise[],
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  createFakeWorkout({
    id: "workout-2",
    name: "Upper Body Workout",
    description: "Focus on upper body strength.",
    duration: 30,
    exercises: [
      {
        id: "push-up",
        name: "Push-Up",
        type: "strength",
        targetMuscle: "chest",
      },
      {
        id: "pull-up",
        name: "Pull-Up",
        type: "strength",
        targetMuscle: "back",
      },
      {
        id: "shoulder-press",
        name: "Shoulder Press",
        type: "strength",
        targetMuscle: "shoulders",
      },
    ] as Exercise[],
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
];

// Core CRUD operations for workouts
export const createWorkout = async (body: any) => {
  // Simulate workout creation logic
  return {
    id: "123",
    ...body,
  };
};

export const getWorkouts = async () => {
  // Simulate fetching workouts from a database
  return TempWorkouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};

export const getWorkoutById = async (id: string) => {
  // Simulate fetching a workout by ID
  const workout = TempWorkouts.find((w) => w.id === id);
  if (!workout) {
    throw new Error("Workout not found");
  }
  return {
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  };
};

export const updateWorkout = async (id: string, body: any) => {
  // Simulate updating a workout
  const workoutIndex = TempWorkouts.findIndex((w) => w.id === id);
  if (workoutIndex === -1) {
    throw new Error("Workout not found");
  }
  const updatedWorkout = {
    ...TempWorkouts[workoutIndex],
    ...body,
    updatedAt: new Date(),
  };
  TempWorkouts[workoutIndex] = updatedWorkout;
  return {
    ...updatedWorkout,
    createdAt: updatedWorkout.createdAt.toISOString(),
    updatedAt: updatedWorkout.updatedAt.toISOString(),
  };
};
export const deleteWorkout = async (id: string) => {
  // Simulate deleting a workout
  const workoutIndex = TempWorkouts.findIndex((w) => w.id === id);
  if (workoutIndex === -1) {
    throw new Error("Workout not found");
  }
  TempWorkouts.splice(workoutIndex, 1);
  return { message: "Workout deleted successfully" };
};

// Extra functions for filtering and managing workouts
export const getWorkoutExercises = async (id: string) => {
  // Simulate fetching exercises for a workout
  const workout = await getWorkoutById(id);
  if (!workout) {
    throw new Error("Workout not found");
  }
  return workout.exercises.map((exercise) => ({
    ...exercise,
    createdAt: exercise.createdAt.toISOString(),
    updatedAt: exercise.updatedAt.toISOString(),
  }));
};
export const addExerciseToWorkout = async (
  workoutId: string,
  exercise: Exercise
) => {
  // Simulate adding an exercise to a workout
  const workout = await getWorkoutById(workoutId);
  if (!workout) {
    throw new Error("Workout not found");
  }
  workout.exercises.push(exercise);
  return {
    ...workout,
    exercises: workout.exercises.map((ex) => ({
      ...ex,
      createdAt: ex.createdAt.toISOString(),
      updatedAt: ex.updatedAt.toISOString(),
    })),
  };
};
export const removeExerciseFromWorkout = async (
  workoutId: string,
  exerciseId: string
) => {
  // Simulate removing an exercise from a workout
  const workout = await getWorkoutById(workoutId);
  if (!workout) {
    throw new Error("Workout not found");
  }
  workout.exercises = workout.exercises.filter((ex) => ex.id !== exerciseId);
  return {
    ...workout,
    exercises: workout.exercises.map((ex) => ({
      ...ex,
      createdAt: ex.createdAt.toISOString(),
      updatedAt: ex.updatedAt.toISOString(),
    })),
  };
};
export const getWorkoutByName = async (name: string) => {
  // Simulate fetching a workout by name
  const workout = TempWorkouts.find(
    (w) => w.name.toLowerCase() === name.toLowerCase()
  );
  if (!workout) {
    throw new Error("Workout not found");
  }
  return {
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  };
};
export const getWorkoutsByDuration = async (duration: number) => {
  // Simulate fetching workouts by duration
  const workouts = TempWorkouts.filter((w) => w.duration === duration);
  if (workouts.length === 0) {
    throw new Error("No workouts found for the specified duration");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExercise = async (exerciseId: string) => {
  // Simulate fetching workouts that include a specific exercise
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.id === exerciseId)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found containing the specified exercise");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByType = async (type: string) => {
  // Simulate fetching workouts by exercise type
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.type === type)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found for the specified exercise type");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByTargetMuscle = async (targetMuscle: string) => {
  // Simulate fetching workouts by target muscle
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.targetMuscle === targetMuscle)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found for the specified target muscle");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};

export const getWorkoutsByDateRange = async (
  startDate: Date,
  endDate: Date
) => {
  // Simulate fetching workouts by date range
  const workouts = TempWorkouts.filter((w) => {
    const createdAt = new Date(w.createdAt);
    return createdAt >= startDate && createdAt <= endDate;
  });
  if (workouts.length === 0) {
    throw new Error("No workouts found in the specified date range");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByCreatedAt = async (createdAt: Date) => {
  // Simulate fetching workouts by creation date
  const workouts = TempWorkouts.filter((w) => {
    const workoutCreatedAt = new Date(w.createdAt);
    return workoutCreatedAt.toDateString() === createdAt.toDateString();
  });
  if (workouts.length === 0) {
    throw new Error("No workouts found created on the specified date");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByUpdatedAt = async (updatedAt: Date) => {
  // Simulate fetching workouts by last updated date
  const workouts = TempWorkouts.filter((w) => {
    const workoutUpdatedAt = new Date(w.updatedAt);
    return workoutUpdatedAt.toDateString() === updatedAt.toDateString();
  });
  if (workouts.length === 0) {
    throw new Error("No workouts found updated on the specified date");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByName = async (name: string) => {
  // Simulate fetching workouts by name
  const workouts = TempWorkouts.filter((w) =>
    w.name.toLowerCase().includes(name.toLowerCase())
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified name");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByDescription = async (description: string) => {
  // Simulate fetching workouts by description
  const workouts = TempWorkouts.filter((w) =>
    w.description.toLowerCase().includes(description.toLowerCase())
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified description");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByDurationRange = async (
  minDuration: number,
  maxDuration: number
) => {
  // Simulate fetching workouts by duration range
  const workouts = TempWorkouts.filter(
    (w) => w.duration >= minDuration && w.duration <= maxDuration
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found in the specified duration range");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseType = async (exerciseType: string) => {
  // Simulate fetching workouts by exercise type
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.type === exerciseType)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified exercise type");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByEquipment = async (equipment: string) => {
  // Simulate fetching workouts by equipment
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.equipment === equipment)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified equipment");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByTargetMuscleGroup = async (
  targetMuscleGroup: string
) => {
  // Simulate fetching workouts by target muscle group
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.targetMuscle === targetMuscleGroup)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found for the specified target muscle group");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};

export const getWorkoutsByEquipmentType = async (equipmentType: string) => {
  // Simulate fetching workouts by equipment type
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.equipment === equipmentType)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified equipment type");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};

export const getWorkoutsByEquipmentAndTargetMuscle = async (
  equipment: string,
  targetMuscle: string
) => {
  // Simulate fetching workouts by equipment and target muscle
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) => ex.equipment === equipment && ex.targetMuscle === targetMuscle
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified equipment and target muscle"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseName = async (exerciseName: string) => {
  // Simulate fetching workouts by exercise name
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) =>
      ex.name.toLowerCase().includes(exerciseName.toLowerCase())
    )
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified exercise name");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTypeAndTargetMuscle = async (
  exerciseType: string,
  targetMuscle: string
) => {
  // Simulate fetching workouts by exercise type and target muscle
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) => ex.type === exerciseType && ex.targetMuscle === targetMuscle
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise type and target muscle"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseEquipment = async (
  exerciseEquipment: string
) => {
  // Simulate fetching workouts by exercise equipment
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.equipment === exerciseEquipment)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found with the specified exercise equipment");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTargetMuscle = async (
  exerciseTargetMuscle: string
) => {
  // Simulate fetching workouts by exercise target muscle
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.targetMuscle === exerciseTargetMuscle)
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise target muscle"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseDifficulty = async (
  exerciseDifficulty: string
) => {
  // Simulate fetching workouts by exercise difficulty
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some((ex) => ex.difficulty === exerciseDifficulty)
  );
  if (workouts.length === 0) {
    throw new Error("No workouts found for the specified exercise difficulty");
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseEquipmentAndTargetMuscle = async (
  exerciseEquipment: string,
  targetMuscle: string
) => {
  // Simulate fetching workouts by exercise equipment and target muscle
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) =>
        ex.equipment === exerciseEquipment && ex.targetMuscle === targetMuscle
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise equipment and target muscle"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTypeAndEquipment = async (
  exerciseType: string,
  equipment: string
) => {
  // Simulate fetching workouts by exercise type and equipment
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) => ex.type === exerciseType && ex.equipment === equipment
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise type and equipment"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTypeAndDifficulty = async (
  exerciseType: string,
  difficulty: string
) => {
  // Simulate fetching workouts by exercise type and difficulty
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) => ex.type === exerciseType && ex.difficulty === difficulty
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise type and difficulty"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTargetMuscleAndDifficulty = async (
  exerciseTargetMuscle: string,
  difficulty: string
) => {
  // Simulate fetching workouts by exercise target muscle and difficulty
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) =>
        ex.targetMuscle === exerciseTargetMuscle && ex.difficulty === difficulty
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise target muscle and difficulty"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseEquipmentAndDifficulty = async (
  exerciseEquipment: string,
  difficulty: string
) => {
  // Simulate fetching workouts by exercise equipment and difficulty
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) => ex.equipment === exerciseEquipment && ex.difficulty === difficulty
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise equipment and difficulty"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTypeAndTargetMuscleAndDifficulty = async (
  exerciseType: string,
  targetMuscle: string,
  difficulty: string
) => {
  // Simulate fetching workouts by exercise type, target muscle, and difficulty
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) =>
        ex.type === exerciseType &&
        ex.targetMuscle === targetMuscle &&
        ex.difficulty === difficulty
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise type, target muscle, and difficulty"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseEquipmentAndTargetMuscleAndDifficulty =
  async (
    exerciseEquipment: string,
    targetMuscle: string,
    difficulty: string
  ) => {
    // Simulate fetching workouts by exercise equipment, target muscle, and difficulty
    const workouts = TempWorkouts.filter((w) =>
      w.exercises.some(
        (ex) =>
          ex.equipment === exerciseEquipment &&
          ex.targetMuscle === targetMuscle &&
          ex.difficulty === difficulty
      )
    );
    if (workouts.length === 0) {
      throw new Error(
        "No workouts found for the specified exercise equipment, target muscle, and difficulty"
      );
    }
    return workouts.map((workout) => ({
      ...workout,
      createdAt: workout.createdAt.toISOString(),
      updatedAt: workout.updatedAt.toISOString(),
    }));
  };
export const getWorkoutsByExerciseTypeAndEquipmentAndDifficulty = async (
  exerciseType: string,
  equipment: string,
  difficulty: string
) => {
  // Simulate fetching workouts by exercise type, equipment, and difficulty
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) =>
        ex.type === exerciseType &&
        ex.equipment === equipment &&
        ex.difficulty === difficulty
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise type, equipment, and difficulty"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTargetMuscleAndEquipment = async (
  exerciseTargetMuscle: string,
  equipment: string
) => {
  // Simulate fetching workouts by exercise target muscle and equipment
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) =>
        ex.targetMuscle === exerciseTargetMuscle && ex.equipment === equipment
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise target muscle and equipment"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTypeAndEquipmentAndTargetMuscle = async (
  exerciseType: string,
  equipment: string,
  targetMuscle: string
) => {
  // Simulate fetching workouts by exercise type, equipment, and target muscle
  const workouts = TempWorkouts.filter((w) =>
    w.exercises.some(
      (ex) =>
        ex.type === exerciseType &&
        ex.equipment === equipment &&
        ex.targetMuscle === targetMuscle
    )
  );
  if (workouts.length === 0) {
    throw new Error(
      "No workouts found for the specified exercise type, equipment, and target muscle"
    );
  }
  return workouts.map((workout) => ({
    ...workout,
    createdAt: workout.createdAt.toISOString(),
    updatedAt: workout.updatedAt.toISOString(),
  }));
};
export const getWorkoutsByExerciseTypeAndEquipmentAndTargetMuscleAndDifficulty =
  async (
    exerciseType: string,
    equipment: string,
    targetMuscle: string,
    difficulty: string
  ) => {
    // Simulate fetching workouts by exercise type, equipment, target muscle, and difficulty
    const workouts = TempWorkouts.filter((w) =>
      w.exercises.some(
        (ex) =>
          ex.type === exerciseType &&
          ex.equipment === equipment &&
          ex.targetMuscle === targetMuscle &&
          ex.difficulty === difficulty
      )
    );
    if (workouts.length === 0) {
      throw new Error(
        "No workouts found for the specified exercise type, equipment, target muscle, and difficulty"
      );
    }
    return workouts.map((workout) => ({
      ...workout,
      createdAt: workout.createdAt.toISOString(),
      updatedAt: workout.updatedAt.toISOString(),
    }));
  };
export const getWorkoutsByExerciseTypeAndEquipmentAndTargetMuscleAndDifficultyAndDateRange =
  async (
    exerciseType: string,
    equipment: string,
    targetMuscle: string,
    difficulty: string,
    startDate: Date,
    endDate: Date
  ) => {
    // Simulate fetching workouts by exercise type, equipment, target muscle, difficulty, and date range
    const workouts = TempWorkouts.filter(
      (w) =>
        w.exercises.some(
          (ex) =>
            ex.type === exerciseType &&
            ex.equipment === equipment &&
            ex.targetMuscle === targetMuscle &&
            ex.difficulty === difficulty
        ) &&
        new Date(w.createdAt) >= startDate &&
        new Date(w.createdAt) <= endDate
    );
    if (workouts.length === 0) {
      throw new Error("No workouts found for the specified criteria");
    }
    return workouts.map((workout) => ({
      ...workout,
      createdAt: workout.createdAt.toISOString(),
      updatedAt: workout.updatedAt.toISOString(),
    }));
  };
