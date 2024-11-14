# To-Do List Application
![Screenshot (80)](https://github.com/user-attachments/assets/210219df-a6c7-4b67-970e-37248027ab7e)
A simple and efficient To-Do List application built using Node.js, allowing users to create, read, update, and delete tasks.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks to your to-do list.
- View all tasks at a glance.
- Update tasks to mark them as complete or edit details.
- Delete tasks you no longer need.
- Persistent storage for tasks.

## Installation

1. **Clone the repository:**
   ```bash
   (https://github.com/ClementRep/Todo.git)
   ```
2. **Navigate to the project directory:**
   ```bash
   cd todo
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add database connection details or any other necessary configurations.

5. **Start the application:**
   ```bash
   npm start
   ```

## screenshots
   - ![Screenshot (78)](https://github.com/user-attachments/assets/2d4c44d9-c714-4a9c-8920-485f2e416979)
![Screenshot (75)](https://github.com/user-attachments/assets/eda5a6e8-2c21-4e5a-8215-edd7badadea0)
![Screenshot (74)](https://github.com/user-attachments/assets/c5cdd419-864d-43e3-b000-953303d64657)

## Usage

1. Open your browser and navigate to `http://localhost:3000` (or the port specified in your `.env` file).
2. Use the interface to manage your tasks.

## API Endpoints

- **GET /** - Retrieve all tasks
- **POST /add** - Add a new task
- **DELETE /remove** - Delete a task by ID

### Example API Request

To add a new task:
```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "Buy groceries"}'
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
