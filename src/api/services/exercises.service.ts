export type Exercise = {
  id: string;
  name: string;
  description: string;
  duration: number; // in seconds
  repetitions: number;
  sets: number;
  rest: number; // in seconds
  type: string; // e.g., "cardio", "strength", "flexibility"
  equipment: string; // e.g., "dumbbell", "barbell", "none"
  difficulty: string; // e.g., "beginner", "intermediate", "advanced"
  targetMuscle: string; // e.g., "legs", "arms", "core", "full body"
  createdAt: Date;
  updatedAt: Date;
};

export const createFakeExercise = (
  overrides: Partial<Exercise> = {}
): Exercise => {
  return {
    id: "fake-id",
    name: "Fake Exercise",
    description: "This is a fake exercise for testing purposes.",
    duration: 60,
    repetitions: 15,
    sets: 3,
    rest: 30,
    type: "cardio",
    equipment: "none",
    difficulty: "intermediate",
    targetMuscle: "full body",
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
};

const TempExercises = [
  createFakeExercise({
    id: "squat",
    name: "Squat",
    type: "strength",
    targetMuscle: "legs",
  }),
  createFakeExercise({
    id: "burpee",
    name: "Burpee",
    type: "cardio",
    targetMuscle: "full body",
  }),
  createFakeExercise({
    id: "plank",
    name: "Plank",
    type: "core",
    targetMuscle: "core",
  }),
];

export const createExercise = async (body: any) => {
  // Simulate exercise creation logic
  return {
    id: "123",
    ...body,
  };
};

export const getExercises = async () => {
  // Simulate fetching exercises from a database
  return TempExercises.map((exercise) => ({
    ...exercise,
    createdAt: exercise.createdAt.toISOString(),
    updatedAt: exercise.updatedAt.toISOString(),
  }));
};

export const getExerciseById = async (id: string) => {
  // Simulate fetching a single exercise by ID
  return TempExercises.find((exercise) => exercise.id === id) || null;
};

export const updateExercise = async (id: string, body: any) => {
  // Simulate updating an exercise
  return {
    id,
    ...body,
  };
};

export const deleteExercise = async (id: string) => {
  return true; // Simulate successful deletion
};
