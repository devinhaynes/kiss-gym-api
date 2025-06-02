export const createExercise = async (body: any) => {
  // Simulate exercise creation logic
  return {
    id: "123",
    ...body,
  };
};

export const getExercises = async () => {
  // Simulate fetching exercises from a database
  return [
    {
      id: "1",
      name: "Push Up",
      description: "A basic push-up exercise",
      duration: 30,
      repetitions: 10,
      sets: 3,
      rest: 60,
      type: "strength",
      equipment: "none",
      difficulty: "beginner",
      targetMuscle: "chest",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
};

export const getExerciseById = async (id: string) => {
  // Simulate fetching a single exercise by ID
  return {
    id,
    name: "Push Up",
    description: "A basic push-up exercise",
    duration: 30,
    repetitions: 10,
    sets: 3,
    rest: 60,
    type: "strength",
    equipment: "none",
    difficulty: "beginner",
    targetMuscle: "chest",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
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
