# KISS Gym API

A simple, concept gym application API built with Node.js. The goal is to provide a minimal, easy-to-understand backend for managing gym members, workouts, and schedules.

## Features

- User authentication and registration
- Member profile management
- Workout and exercise tracking
- Class and schedule management
- RESTful API design

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (or your preferred database)
- **JWT** for authentication

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/kiss-gym-api.git
   cd kiss-gym-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env` and update with your settings.

4. **Run the server:**
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| POST   | /api/auth/register | Register a new user   |
| POST   | /api/auth/login    | Login and get a token |
| GET    | /api/members       | List all members      |
| POST   | /api/workouts      | Create a new workout  |
| ...    | ...                | ...                   |

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
