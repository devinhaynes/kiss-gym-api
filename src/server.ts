import express from "express";
import exerciseRouter from "./api/routes/exercises.route";
import workoutRouter from "./api/routes/workouts.route";
import logger from "./middleware/logger";

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Routes
app.use("/api/exercises", exerciseRouter);
app.use("/api/workouts", workoutRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
